import {Component, OnInit} from '@angular/core';
import {ObjectTypes} from '../../_shared/ObjectTypes';
import {TodoServiceService} from '../../_shared/_todo-service.service'; // ВНЕДРЕНИЕ ЗАВИСИМОСТЕЙ

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
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
    constructor(private todoService: TodoServiceService) {
        // конструктор предназначен для простой инициализации свойст, а не для связи коmпонентов через серис
        // нельзя так   this.ObjectTodos = this.todoService.getDateBaseTodos();
        this.ObjectTodos = [];
    }

    ngOnInit() { // метод который ангуляр вызовет в определенный момент https://angular.io/guide/lifecycle-hooks
        this.ObjectTodos = this.todoService.getDateBaseTodos();
    }

    /**
     * Обработка клика по чекбоксу
     * @param {ObjectTypes[]} ObjectTodos - Необизательно было передавать весь масив
     *      Но в случае вложености компонентов изменение значений по ссылке (через return)
     *      значительно прощечем чем искать елемент масив в масиве.
     * @param {ObjectTypes} checkbox
     */
    onCheck(ObjectTodos: ObjectTypes[], checkbox: ObjectTypes) {
        // ВНЕДРЕНИЕ ЗАВИСИМОСТЕЙ : логику перенесли
        this.todoService.CheckTodo(checkbox);
    }

    /**
     * Удаление задачи
     * @param {ObjectTypes[]} ObjectTodos - Необизательно было передавать весь масив
     *      Но в случае вложености компонентов изменение значений по ссылке (через return)
     *      значительно прощечем чем искать елемент масив в масиве.
     * @param {ObjectTypes} del
     */
    onDelete(ObjectTodos: ObjectTypes[], del: ObjectTypes) {
        // ВНЕДРЕНИЕ ЗАВИСИМОСТЕЙ : логику для бека перенесли
        this.todoService.DeleteTodo(del);
    }
}
