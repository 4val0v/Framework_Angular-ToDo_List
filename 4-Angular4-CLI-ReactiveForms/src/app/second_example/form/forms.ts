import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * @whatItDoes описываем поля формы
 */
export class FieldInputForm {
  constructor(public name: string = '',
              public email: string = '') {}
}

/**
 * @whatItDoes Проверка валидации
 */
export class FormsInputValidations {

  /**
   * проверка на длину строки
   * @param control {string} приходящие значения
   * @returns {any} возврат null или ValidationErrors
   */
  static cannotContainMinMaxLength (control: AbstractControl): ValidationErrors | null {
    const inputLength = (control.value as string).length;
    const  searchErr = (inputLength <= 2) || (inputLength >= 40);
    if ( searchErr ) {
      return {cannotContainMinMaxLength: true};
    }
    return null;
  }

  /**
   * проверка Имени на символы /[_+-=.:,;!#$%^&*()<>@"'`~?\\/| 0-9]/gi
   * @param control {string} приходящие значения
   * @returns {any} возврат null или ValidationErrors
   */
  static cannotContainSeparatorName (control: AbstractControl ): ValidationErrors | null {
    const delimiter = /[_+-=.:,;!#$%^&*()<>@"'`~?\\/| 0-9]/gi;
    const  searchErr = (control.value as string).search(delimiter);
    if ( searchErr >= 0 ) {
      return {cannotContainSeparator: true};
    }
    return null;
  }

  /**
   * проверка Текста на символы /[_+=$^&*<>`~\\|]/gi
   * @param control {string} приходящие значения
   * @returns {any} возврат null или ValidationErrors
   */
  static cannotContainSeparatorText (control: AbstractControl ): ValidationErrors | null {
    const delimiter = /[_+=#$%^&*<>`~\\|]/gi;
    const  searchErr = (control.value as string).search(delimiter);
    if ( searchErr >= 0 ) {
      return {cannotContainSeparator: true};
    }
    return null;
  }

  /**
   * проверка валидности email
   * @param control {string} входяший email
   * @returns {any}  true || null
   */
  static cannotContainInvalidEmail (control: AbstractControl): ValidationErrors | null {
    const emailDelimiter = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/gi;
    const  searchErr = (control.value as string).search(emailDelimiter);
    if ( searchErr < 0 ) {
      return {cannotContainInvalidEmail: true};
    }
    return null;
  }
}
