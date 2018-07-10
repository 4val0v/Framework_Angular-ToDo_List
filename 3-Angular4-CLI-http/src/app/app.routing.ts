/** routing - редирект страниц по URL адресу
 * Чтобы внедрить routing :
 * 1) Создать сам файл app.routing.ts
 * 2) Зарегестрировать сервис в app.component.ts =>   @NgModule({ imports: [ AppRoutingModul ] })
 * и пропишем такой тег <router-outlet></router-outlet>
 * */

import { RouterModule, Routes } from '@angular/router'; // для роутинга страниц нужны модули
import { NgModule } from '@angular/core';   // обработчик входа и выхода с настройками
import { TodoMainComponent } from './todo-main/todo-main.component';   // какие страници будим роутить
import { TodoDetailedComponent } from './todo-main/todo-list/todo-detailed/todo-detailed.component';  // какие страници будим роутить


const MyAppRoutes: Routes = [
  {
    path : '',                    // путь по которому сработае наш роут
    component: TodoMainComponent  // что нам покажет когда сработает
  },
  {
    path : 'todo/:id',                // путь по которому сработае наш роут
    component: TodoDetailedComponent  // что нам покажет когда сработает
  }
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
