import {TestBed, async, ComponentFixture, fakeAsync} from '@angular/core/testing';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms'; // Декларирование FormGroup для ReactiveForms
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {TodoFormComponent___no_test} from './todo-form.component';
import {TodoServiceService} from '../../_shared/_todo-service.service';
import {ObjectTypes} from '../../_shared/ObjectTypes';

describe('TodoFormComponent___no_test', () => {

  let fixture: ComponentFixture<TodoFormComponent___no_test>;
  let component: TodoFormComponent___no_test;
  let compiled;

  // фейковый сервис
  const mockService = {
    bd: [
      {
        id: 0,
        title: 'test1',
        completed: true,
        body: 'body1'
      },
      {
        id: 1,
        title: 'test2',
        completed: false,
        body: 'body2'
      }
    ],
    CreateTodo: function (id: number, title: string, status: boolean = false, body: string) {
      console.log('Create TEST Tasks :  работает фейковый сервер');

      const newTask: ObjectTypes = {id: this.bd.length, title: title, completed: status, body: body};
      this.bd.push(newTask);

      return this.bd;
    },
    getProducts: function () {
      return this.bd;
    }
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          ReactiveFormsModule // Декларирование FormGroup для ReactiveForms
        ],
        declarations: [
          TodoFormComponent___no_test, // декларируем проверяемый компонент
        ],
        providers: [FormBuilder],
        schemas: [ NO_ERRORS_SCHEMA ]
        // Мокирование : не стоит использовать в тесте настоящие экземпляры зависимостей
        // - если внутренняя логика зависимости изменится, придется переписывать сразу два теста — нашего сервиса и зависимости
        // - придется мокировать зависимость второго порядка.
        // - зависимости тянут за собой другие зависимости а они могут быть тяжелыми и ресурсоемкими
      })
      .overrideComponent(TodoFormComponent___no_test, {
        set: {
          providers: [
            // https://habr.com/post/349380/
            // Не стоит путать useValue и provide. Это разные объекты: первый — клон второго.
            {provide: TodoServiceService, useValue: mockService} // Делаем Подмену сервиса на фейковый для тестов.
          ]
        }
      })
      .compileComponents()
        .then(() => {
          // create component and test fixture
          fixture = TestBed.createComponent(TodoFormComponent___no_test); // создать экземпляр компонента.
          // get test component from the fixture
          component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
          compiled = fixture.debugElement.nativeElement; // Свойство возвращает объект DOM, представляющий управляющиэлемент для компонента
          fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
        });
    })
  );

// 1) пример  = https://medium.com/@paynoattn/angular2-formbuilder-unit-tests-9da5ef5dbbe5
// 2) https://codecraft.tv/courses/angular/unit-testing/model-driven-forms/
// 3) https://stackoverflow.com/questions/36335019/method-to-set-value-and-update-validity-of-form-control

  function updateForm(userEmail, userPassword) {
    component.formValidations.controls['inputTitle'].setValue(userEmail);
    component.formValidations.controls['inputBody'].setValue(userPassword);
  }

  it('should Create TodoFormComponent___no_test', async(() => {
    console.log('- TEST "Create" component - work');
    expect(component).toBeTruthy();
  }));

  it(`should now Valid form`, async(() => {
    console.log('- TEST "now Valid form" TodoFormComponent___no_test - work');
    updateForm('', '');
    expect(component.formValidations.valid).toBeFalsy(false);
  }));

  it('should Valid form', fakeAsync(() => {
    console.log('- TEST "Valid form" TodoFormComponent___no_test - work');
    updateForm('valid@asd.mail', 'valid123');
    expect(component.formValidations.valid).toEqual(true);
  }));

  // it('should Create NEW Task', fakeAsync(() => {
  //   console.log('- TEST "Create NEW Task" TodoFormComponent___no_test - work');
  //
  //   // component.createTasks();
  //   // expect(component)
  // }));

});
