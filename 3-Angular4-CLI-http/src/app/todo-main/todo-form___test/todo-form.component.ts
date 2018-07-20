import {Component} from '@angular/core';
import {TodoServiceService} from '../../_shared/_todo-service.service';
import {ObjectTypes, FormsInputValidations} from '../../_shared/ObjectTypes';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-todo-form___test',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.styl']
})
export class TodoFormComponent___test {
  formObjectValid: ObjectTypes = {
    id: 0,
    title: '',
    completed: false,
    body: ''
  };

  formValidations: FormGroup;
  formValid: boolean = false;

  constructor(
    private todoService: TodoServiceService,
    private fb: FormBuilder
  ) {
    this.formValidations = this.fb.group({
      'inputTitle': [undefined, Validators.required],
      'inputBody': [undefined, Validators.required]
    });

    this.formValidations.valueChanges.subscribe(() => {
      this.formValid = this.formValidations.valid;
    });
  }

  /**
   * создание таска
   */
  createTasks() {
    // todo не работает
    this.formObjectValid = this.formValidations.value;
    console.log('app-todo-form___test - createTasks - ', this.formObjectValid );
    this.todoService.CheckTodo(this.formObjectValid);
  }

}


