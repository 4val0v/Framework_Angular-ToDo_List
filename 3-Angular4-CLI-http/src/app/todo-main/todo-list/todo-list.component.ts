import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../_shared/_todo-service.service'; // ВНЕДРЕНИЕ ЗАВИСИМОСТЕЙ
import { ObjectTypes } from '../../_shared/ObjectTypes';
import 'rxjs/add/operator/toPromise';
import {HttpErrorResponse} from '@angular/common/http'; // обработчик ошибок

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
    this.ObjectTodos = [];
  }

  async ngOnInit() { // метод который ангуляр вызовет в определенный момент https://angular.io/guide/lifecycle-hooks
    // (BD вариант 1) - фиксированная бд - костыль
    // this.ObjectTodos = this.todoService.getDateBaseTodos();

/*
    //  (HTTP вариант 2) - Promise
    this.todoService.getDateBaseTodos()
      .then( _BD => this.ObjectTodos = _BD );    // (HTTP вариант 2)
*/

    // (HTTP вариант 3) - Observable
    this.todoService.getDateBaseTodos().subscribe(
      (value: ObjectTypes[]) => {
          console.log('todo-list: ', value );
          this.ObjectTodos = value;
          // data.map(val => {
          //   this.ObjectTodos.push(val);
          // });
        },
      (err: HttpErrorResponse) => {
          // перехватчики и HttpClient в проекте  ==  https://codingthesmartway.com/angular-4-3-httpclient-accessing-rest-web-services-with-angular/
          // Вы также можете получить более конкретную информацию об ошибке,
          // указав параметр типа HttpErrorResponse для функции обработчика ошибок.
          // HttpErrorResponse необходимо импортировать из @ angle / common / http :
          if (err.error instanceof Error) {
            console.log('Client-side error occured.', err);
          } else {
            console.log('Server-side error occured.', err);
          }
      }
    );


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
