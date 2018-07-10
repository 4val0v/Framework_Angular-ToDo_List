import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FieldInputForm, FormsInputValidations} from './forms';

@Component({
  selector: 'second-example-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.styl']
})
/**
 *  Создание реактивной формы
 */
export class SecondComponent implements OnInit {

  public formYourIdea: FieldInputForm;
  public formValid = new FormGroup({
    nameInput: new FormControl('', [  Validators.required,
      FormsInputValidations.cannotContainMinMaxLength,
      FormsInputValidations.cannotContainSeparatorName
    ]),
    emailInput: new FormControl('', [ Validators.required,
      FormsInputValidations.cannotContainInvalidEmail
    ])
  });

  constructor() {
    this.formYourIdea = {
      name: '',
      email: ''
    };
  }

  ngOnInit() {
  }

  get invalidNameInput(){
    return this.formValid.get('nameInput');
  }
  get invalidEmailInput(){
    return this.formValid.get('emailInput');
  }
  formSent(event: Event) {
    /* todo: отправка формы form-price   добавить оповишение отправки или ошибки.
     попробывать добавить Snackbar   https://material.angular.io/components/snack-bar/overview */
    console.log('отправка формы form-price = ', event);

    // this.formYourIdea.name = '';
    // console.log(this.formValid.value['nameInput']);
    // this.formYourIdea.email = '';
    // console.log(this.formValid.value['emailInput']);
  }
}
