import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../_shared/_todo-service.service'; // ВНЕДРЕНИЕ ЗАВИСИМОСТЕЙ
import { ObjectTypes } from '../../_shared/ObjectTypes';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.styl']
})
export class TodoListComponent implements OnInit {

  ObjectTodos: ObjectTypes[];

  /** ВНЕДРЕНИЕ ЗАВИСИМОСТЕЙ :
   * 1) Добавить конструктор и указать параметры с типом сервиса
   *
   * конструктор предназначен для простой инициализации свойст, а не для связи копонентов через серис
   *                    " this.ObjectTodos = this.todoService.getDateBaseTodos(); "
   * для решения етой проблемы есть ngOnInit()  => life_cycle_hooks =
   *                       подробней    =>    https://angular.io/guide/lifecycle-hooks
   */
  constructor( private todoService: TodoServiceService ) {
    // конструктор предназначен для простой инициализации свойст, а не для связи коmпонентов через серис
    // нельзя так   this.ObjectTodos = this.todoService.getDateBaseTodos();
    this.ObjectTodos = [];   // (BD вариант 1) (HTTP вариант 2)
  }

  ngOnInit() { // метод который ангуляр вызовет в определенный момент https://angular.io/guide/lifecycle-hooks
    // this.ObjectTodos = this.todoService.getDateBaseTodos();     // (BD вариант 1)
    this.todoService.getDateBaseTodos()
      .then( _BD => this.ObjectTodos = _BD );    // (HTTP вариант 2)
  }

  onCheck(checkbox: ObjectTypes) {
    // ВНЕДРЕНИЕ ЗАВИСИМОСТЕЙ : логику перенесли
    this.todoService.CheckTodo(checkbox);
  }

  onDelete(del: ObjectTypes) {
    // ВНЕДРЕНИЕ ЗАВИСИМОСТЕЙ : логику перенесли
    this.todoService.DeleteTodo(del);
  }
}
