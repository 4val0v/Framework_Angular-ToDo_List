import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsInputValidations } from './forms';

@Component({
  selector: 'test-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.styl']
})
/**
 *  Создание реактивной формы
 */
export class SecondComponent implements OnInit {

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      'userName': new FormControl('', [  Validators.required,
          FormsInputValidations.cannotContainMinMaxLength,
          FormsInputValidations.cannotContainSeparatorName
        ]),
      'userEmail': new FormControl('', [ Validators.required,
          FormsInputValidations.cannotContainInvalidEmail
        ])
    });
  }

  ngOnInit() {}

  submit() {
    console.log('userName', this.myForm.controls['userName']);
    console.log('userEmail', this.myForm.controls['userEmail']);
    console.log(this.myForm.value);
    this.myForm.controls['userName'].setValue('');
    this.myForm.controls['userEmail'].setValue('');
  }
}
