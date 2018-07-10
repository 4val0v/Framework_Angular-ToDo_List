import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // для перехвата данных с роутинга к примеру :Id
import { ObjectTypes } from '../../../_shared/ObjectTypes'; // описание типа обьекта
import { _BD } from '../../../_shared/data';   // Данные

@Component({
  selector: 'app-todo-detailed',
  templateUrl: './todo-detailed.component.html',
  styleUrls: ['./todo-detailed.component.styl']
})
export class TodoDetailedComponent implements OnInit {

  ObjectTodos: ObjectTypes[] = _BD; // База всех заданий
  ObjectTodoId = ''; // Id обьекта с роутинга
  ObjectTodo = {}; // а теперь тут привяжем HTML

  constructor(private RoutingId: ActivatedRoute) {
    // Детальный обзор Выбранного обьекта из масива
    // params -
    // subscribe -(из библ.RxJs) подписываемся на обновление
    // ar.params.subscribe(param => console.log(param));
    RoutingId.params.subscribe(param => {
      this.ObjectTodoId = param.id; // получили id который был выбран (пришел как обьект)
      this.ObjectTodo = this.ObjectTodos[this.ObjectTodoId]; // получим наш обьект под id
      console.log('Выбранный обьект : ', this.ObjectTodos[this.ObjectTodoId] );
    });

  }

  ngOnInit() {}
}
