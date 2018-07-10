import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'first-example-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
/** https://habrahabr.ru/post/346242/
 * Создание реактивной формы
 */
export class FirstComponent implements OnInit {

  myFirstReactiveForm: FormGroup;

  constructor(private FormBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  /** Инициализация формы */
  initForm() {
    this.myFirstReactiveForm = this.FormBuilder.group({
      name:  ['', [ Validators.required, Validators.pattern(/[А-я]/) ] ],
      email: ['', [ Validators.required, Validators.email ] ]
    });
  }


  /**
   * Вывод сообщения об ошибке
   * @param controlName
   * @returns {boolean}
   */
  isControlInvalid(controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  /**
   * Отправка формы
   */
  onSubmit() {
    const controls = this.myFirstReactiveForm.controls;

    if (this.myFirstReactiveForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }

    /** TODO: Обработка данных формы */
    console.log(this.myFirstReactiveForm.value);
  }
}
