/** ВНЕДРЕНИЕ ЗАВИСИМОСТЕЙ
 * service - отвечает за получение, предоставление и работу с данными.
 * Компоненты незнают и недолжны знать откуда берутся данные.
 * преимущество использование сервеса в том что легко изменять метод получения данных (http, MySQL, JSON)
 *
 * Чтобы внедрить сервис в компонент :
 * 1) Добавить конструктор и указать параметры с типом сервиса
 * 2) Зарегестрировать сервис в app.module.ts =>   @NgModule({ providers: [ TodoServiceService ] })
 **/
import {Injectable} from '@angular/core'; // добавляем декоратор для использования других сервисов
// import { _BD } from './base_data';   // получаем данные с Базы Данных (BD вариант 1)
import {ObjectTypes} from './ObjectTypes'; // типизируем данные
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable'; // из библиотеки "rxjs" нам нужен метод ".toPromise()"

/** Injectable()
 * Чтобы указать, что сервис сам может использовать другие сервисы, к классу сервиса применяется декоратор Injectable.
 * Если класс не будет иметь подобного декоратора, то встроенный механизм внедрения зависимостей
 * не сможет создать объект этого класса и выдаст ошибку.
 */
@Injectable()
export class TodoServiceService {
// тестирование @Input/@Output http://www.vincecampanale.com/blog/2018/03/22/testing-custom-events-angular/
  private apiUrl = 'api/_BD'; // адрес откуда будут приходить данные

  // bd: ObjectTypes[] = _BD;  // получаем данные с Базы Данных (BD вариант 1)
  bd: ObjectTypes[] = [];   // (HTTP вариант 2)

  // получим екземпляр сервиса http с типом данных Http
  // и незабываем добавить анотацию @Injectable()
  constructor(private http: Http) {}

  /**
   * метод получения данных, тут мы настраиваем откуда мы получим данные
   *  Observable<any> - типезация получения или Promise<any>
   * */
  getDateBaseTodos(): Observable<any> {
    // возращает базу Данных строка 26, "bd: ObjectTypes[] = _BD;"
    // return this.bd; // (BD вариант 1)

/*
    // (HTTP вариант 2) - Promise
    return this.http.get(this.apiUrl)
      .toPromise()  // получим обещание, но зависит от сервера какой будет ответ - готовый Масив или что-то другое,
      // но в случае с angular-in-memory-web-api мы получим ответ "Обьект" типа Респонс(responses)
      .then(responses => responses.json().data) // что делаем с ответом
      // у Обьекта "responses" вызываем метод ".json()" и получим тело ответа вкачестве обьекта, и он находится в свойстве .data
      .then(pofig => this.bd = pofig)   // передаем масив с задачами в начальный обьект в строке27 "bd: ObjectTypes[] = [];"
      .catch(this.handleError);           // метод для обработки ошибки
*/

    // (HTTP вариант 3) - Observable
      return this.http.get(this.apiUrl).map(response => response.json() );
  }

  /**
   * Http Обработка чекбокса
   * @param checkbox обьект
   * @constructor
   */
  CheckTodo(checkbox: ObjectTypes) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers});
    const Url = `${this.apiUrl}/${checkbox.id}`;
    this.http.put(Url, checkbox, options)
      .toPromise()
      .then(responses => {
        console.log('Checkbox : ', checkbox.title);
        checkbox.completed = !checkbox.completed;
      })
      .catch(this.handleError);
  }

  /**
   * Http Удаление задачи
   * @param del обьект
   * @constructor
   */
  DeleteTodo(del: ObjectTypes) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers});
    const Url = `${this.apiUrl}/${del.id}`;
    this.http.delete(Url, options)
      .toPromise()
      .then(responses => {
        console.log('Delete : ', del.title);
        const index = this.bd.indexOf(del);
        if (index > -1) {
          this.bd.splice(index, 1);
        }
      })
      .catch(this.handleError);
  }

  /**
   * Http Создание задачи
   * @param id  порядковый номер
   * @param title  Название Задачи
   * @param status  статус задачи
   * @param body  Подробное описание задачи
   * @constructor
   */
  CreateTodo(id, title, status, body) {
    console.log('Create Tasks : ', title);

    // кастомно пойдет но с работой через полноценный сервис убрать "this.bd.length"
    // и убрать в './ObjectTypes' из constructor-а
    // потому что id дается на стороне сервера
    const todoObjectCreate = new ObjectTypes(this.bd.length, title, status, body);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers});
    this.http.post(this.apiUrl, todoObjectCreate, options)
      .toPromise()
      .then(res => res.json().data)
      .then(todoCreate => this.bd.push( todoCreate ) )
      .catch(this.handleError);
  }

  /**
   * Обработка ошибки http обещания
   * @param error
   * @returns {Promise<never>}
   */
  private handleError(error: any) {
    console.log('произошла ошибка в промисах : ', error);
    // у обьекта Promise, метод reject() возвращает отвергнутые обещания
    return Promise.reject(error.message || error);
  }
}
