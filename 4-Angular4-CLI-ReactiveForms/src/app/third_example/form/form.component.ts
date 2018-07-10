import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'third-example-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.styl']
})
/** https://metanit.com/web/angular2/5.5.php
 * https://blog.rc21net.ru/reactive-forms-angular-2/
 *  Создание реактивной формы
 */
export class ThirdFormComponent implements OnInit {

  myForm: FormGroup;

  ngOnInit() {}

  constructor() {
    this.myForm = new FormGroup({

      'userName': new FormControl('Tom', Validators.required),
      'userEmail': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
      ]),
      'userPhone': new FormControl()
    });
  }

  submit() {
    console.log(this.myForm);
  }

}
