/** routing - редирект страниц по URL адресу
 * Чтобы внедрить routing :
 * 1) Создать сам файл app.routing.ts или в консоле набрать
 *    ng generate module SomeModule --routing (or ng g m SomeModule --routing, for short)
 * 2) Зарегестрировать сервис в app.component.ts =>   @NgModule({ imports: [ AppRoutingModul ] })
 * */

import { RouterModule, Routes } from '@angular/router'; // для роутинга страниц нужны модули
import { NgModule } from '@angular/core';   // обработчик входа и выхода с настройками
import { TodoMainComponent } from './todo-main/todo-main.component';   // какие страници будим роутить
import { TodoDetailedComponent } from './todo-main/todo-list/todo-detailed/todo-detailed.component';  // какие страници будим роутить


const MyAppRoutes: Routes = [
  {
    path : '',                     // путь по которому сработае наш роут
    component: TodoMainComponent,  // что нам покажет когда сработает
    pathMatch: 'full'
  },
  {
    path : 'todo/:id',                // путь по которому сработае наш роут
    component: TodoDetailedComponent  // что нам покажет когда сработает
  },
  {
    path: 'todo',
    redirectTo: '',     // роут на который перекинет обработку
    pathMatch: 'full'
  },
  // { path: '**', component: TodoMainComponent } // любое не совпадение с роутом обработает етот роут
  { path: '**',  redirectTo: '', } // ну или перенаправим
];

@NgModule({
  imports: [
    RouterModule.forRoot(MyAppRoutes)   // применим наши настройки для роутинга forRoot
  ],
  exports: [
    RouterModule      // и после обработки выплюним на експорт
  ]
})

// готовый модуль отправим на регистрацию в NgModule->imports
export class AppRoutingModul {}
