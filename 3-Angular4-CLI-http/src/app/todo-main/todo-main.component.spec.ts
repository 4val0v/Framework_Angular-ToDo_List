import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {FormsModule} from '@angular/forms'; // декларируем привязки типо [(ngModel)]
import {RouterTestingModule} from '@angular/router/testing'; // декларируем привязки типо [routerLink]

import {TodoMainComponent} from './todo-main.component';
import {TodoFormComponent___no_test} from './todo-form___no_test/todo-form.component';
import {TodoFormComponent___test} from './todo-form___test/todo-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoServiceService} from '../_shared/_todo-service.service';
import {NO_ERRORS_SCHEMA} from '@angular/core'; // игнорирование селекторов подключаемых компонентов.
import {HttpModule} from '@angular/http'; // старый модуль
import {HttpClientModule} from '@angular/common/http'; // новый модуль

describe('TodoMainComponent', () => {

  let component: TodoMainComponent;
  let fixture: ComponentFixture<TodoMainComponent>;
  let compiled;


  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpModule, // для TodoFormComponent___no_test
          HttpClientModule,
          FormsModule, // декларируем привязки типо [(ngModel)]
          RouterTestingModule, // декларируем привязки типо [routerLink]
          ReactiveFormsModule // Декларирование FormGroup в  TodoFormComponent
        ],
        declarations: [
          TodoMainComponent, // декларируем проверяемый компонент
          TodoFormComponent___no_test, // декларируем внутриний компонент
          // TodoFormComponent___test,
          // TodoListComponent// TodoListComponent
        ],
        providers: [TodoServiceService, ], // декларируем подключенный сервис в дочерних компонентах.
        schemas: [NO_ERRORS_SCHEMA] // можно проинорировать routerLink в дочерних компонентах.
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(TodoMainComponent); // создать экземпляр компонента.
          component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
          compiled = fixture.debugElement.nativeElement; // Свойство возвращает объект DOM, представляющий управляющиэлемент для компонента
          fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
        });
    })
  );


  it('should create TodoMainComponent', async(() => {
    console.log('- TEST "create" TodoMainComponent success');

    expect(component).toBeTruthy();
  }));


});
