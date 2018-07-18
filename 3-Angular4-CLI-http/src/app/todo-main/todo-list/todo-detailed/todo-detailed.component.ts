import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // для перехвата данных с роутинга к примеру :Id
import { TodoServiceService } from '../../../_shared/_todo-service.service'; // ВНЕДРЕНИЕ ЗАВИСИМОСТЕЙ
import { ObjectTypes } from '../../../_shared/ObjectTypes';

@Component({
  selector: 'app-todo-detailed',
  templateUrl: './todo-detailed.component.html',
  styleUrls: ['./todo-detailed.component.styl']
})

/** Почемуто не работает
 * Детальный обзор Выбранного обьекта из масива
 */
export class TodoDetailedComponent implements OnInit {

  ObjectTodos: ObjectTypes[];
  ObjectTodoId = ''; // Id обьекта с роутинга
  ObjectTodo = {}; // а теперь тут привяжем HTML

  constructor( private todoService: TodoServiceService,
               private RoutingId: ActivatedRoute ) {
    this.ObjectTodos = [];    // (HTTP вариант 2)

    // subscribe -(из библ.RxJs) подписываемся на обновление
    RoutingId.params.subscribe(param => {
      this.ObjectTodoId = param.id; // получили id который был выбран (пришел как обьект)
      this.ObjectTodo = this.ObjectTodos[this.ObjectTodoId]; // получим наш обьект под id
      console.log('Выбранный обьект : ', this.ObjectTodos[this.ObjectTodoId] );
    });
  }

  ngOnInit() {
    //  (HTTP вариант 2) - Promise
    // this.todoService.getDateBaseTodos().then( _BD => this.ObjectTodos = _BD );

    // (HTTP вариант 3) - Observable
    this.todoService.getDateBaseTodos().subscribe(_BD => this.ObjectTodos = _BD );
  }
}
