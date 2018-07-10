import { Component } from '@angular/core';
import { TodoServiceService } from '../../_shared/_todo-service.service';
import { ObjectTypes, FormsInputValidations } from '../../_shared/ObjectTypes';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  formValid: ObjectTypes;

  constructor( private todoService: TodoServiceService ) {}

  /**
   * создание таска
   */
  createTasks() {
    this.todoService.CreateTodo(null, this.formValid.title, false, this.formValid.body);
    this.formValid.title = '';
    this.formValid.body = '';
  }

  /**
   * связывание всей формы
   * @type {FormGroup}
   */
  formValidations: any = new FormGroup({
    inputTitle: new FormControl('', [ Validators.required,
        FormsInputValidations.cannotContainSpace,
        FormsInputValidations.cannotContainSeparator
    ]),
    inputBody: new FormControl('', [ Validators.required,
      FormsInputValidations.cannotContainSpace,
      FormsInputValidations.cannotContainSeparator
    ])
  });

  /**
   * функция возврата результата проверки на валидность true || false
   * @returns {AbstractControl|null}
   */
  get invalidNameInput(){
    return this.formValidations.get('inputTitle');
  }
  get invalidEmailInput(){
    return this.formValidations.get('inputBody');
  }
}
