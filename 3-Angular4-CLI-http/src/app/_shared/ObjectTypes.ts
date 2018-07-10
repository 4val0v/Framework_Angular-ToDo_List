import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ObjectTypes {
  // на основании етого конструктора можем создавать обьекты и сразу Определяем/Описываем тип Обьекта
  constructor(public id: number, // не в свойстве constructorа потому что id дается на стороне сервера
              public title: string,
              public completed: boolean = false,
              public body: string = '') {}
}


/**
 * @whatItDoes Проверка валидации
 */
export class FormsInputValidations {

  /**
   * проверка на пробелы
   * @param control приходящие значения
   * @returns {any} возврат null или ValidationErrors
   */
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ( (control.value as string).indexOf(' ') >= 0 ) {
      return {cannotContainSpace: true};
    }
    return null;
  }

  /**
   * проверка на символы
   * @param control приходящие значения
   * @returns {any} возврат null или ValidationErrors
   */
  static cannotContainSeparator(control: AbstractControl): ValidationErrors | null {
    if ( (control.value as string).indexOf(',') >= 0 ) {
      return {cannotContainSeparator: true};
    }
    return null;
  }
}
