/** Модули для приложения */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // деректива для работы с модулем [(ngModul)]
import { AlertModule } from 'ngx-bootstrap'; // для работы с bootstrap-css
import { AppRoutingModul} from './app.routing'; // кастомно добавил редирект страниц
import { TodoServiceService } from './_shared/_todo-service.service'; // ВНЕДРЕНИЕ ЗАВИСИМОСТЕЙ
import { ReactiveFormsModule } from '@angular/forms'; // реактив проверка формы

import { HttpModule } from '@angular/http'; // подключение Http модуля

/* подробней :  https://angular.io/tutorial/toh-pt6#simulate-the-web-api */
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; // регистрации модуля
import { InMemoryDataService } from './_shared/base_data'; // наша база данных

/* страницы для регистрации */
import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-main/todo-form/todo-form.component';
import { TodoListComponent } from './todo-main/todo-list/todo-list.component';
import { TodoMainComponent } from './todo-main/todo-main.component';
import { TodoDetailedComponent } from './todo-main/todo-list/todo-detailed/todo-detailed.component';

/**
 * @NgModule - Анотация
 * Анотация добавляется спомошью Декоратора @
 * Декоратор - спец функция для добавления мета-информации класса
 *
 * @NgModule добавлена для подтверждения ангуляру что етот Модуль, будет основнвм модулем приложения
 * @NgModule принимает обьект в котором
 * declarations: для регистрации компонетов, хранит набор используемых компонентов
 * imports: импортим потдержку платформ, модули которые будут использоваться.
 * bootstrap определяет загружаемый компонент
 */
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModul,      // регистрация роутера для страниц
    FormsModule,          // регистрация модуля [(ngModul)]
    HttpModule,           // подключение Http модуля
    ReactiveFormsModule,  // проверка валидации формы на лету
    AlertModule.forRoot(), // регистрация bootstrap-css
    InMemoryWebApiModule.forRoot( InMemoryDataService ) // и тут-же указываем какую БД мы будем использовать
    /* forRoot() - для настройки, конфигурация всего приложения(корневой модуль)*/
  ],
  declarations: [
    /* регистрация страниц */
    AppComponent,  // ниже регистрация страниц
    TodoFormComponent,
    TodoListComponent,
    TodoDetailedComponent,
    TodoMainComponent
  ],
  providers: [TodoServiceService], // ВНЕДРЕНИЕ ЗАВИСИМОСТЕЙ : регистрация сервиса
  bootstrap: [AppComponent]
})
// Поскольку мы используем в другом месте то добавляем "export"
export class AppModule { }
