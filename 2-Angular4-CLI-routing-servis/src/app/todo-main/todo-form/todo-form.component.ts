import {Component} from '@angular/core';
import {TodoServiceService} from '../../_shared/_todo-service.service';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
    newTodoTitle = '';
    newTodoBody = '';

    constructor(private todoService: TodoServiceService) {}

    createTasks() {
        this.todoService.CreateTodo(this.newTodoTitle, this.newTodoBody);
        this.newTodoTitle = '';
        this.newTodoBody = '';
    }

}
