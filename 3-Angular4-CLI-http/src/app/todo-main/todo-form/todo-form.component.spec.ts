import {TestBed, async, ComponentFixture, fakeAsync} from '@angular/core/testing';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms'; // Декларирование FormGroup для ReactiveForms
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {TodoFormComponent} from './todo-form.component';
import {TodoServiceService} from '../../_shared/_todo-service.service';
import {ObjectTypes} from '../../_shared/ObjectTypes';

describe('TodoFormComponent', () => {

  let fixture: ComponentFixture<TodoFormComponent>;
  let component: TodoFormComponent;
  let compiled;

  // фейковый сервис
  const mockService = {
    bd: [],
    CreateTodo: function (id: number, title: string, status: boolean = false, body: string) {
      console.log('Create TEST Tasks :  работает фейковый сервер');

      const newTask: ObjectTypes = {id: this.bd.length, title: title, completed: status, body: body};
      this.bd.push(newTask);

      return this.bd;
    },
    getProducts: function () {
      return [
        new ObjectTypes(1, 'test1', true, 'body'),
        new ObjectTypes(2, 'test2', false, 'body'),
        new ObjectTypes(3, 'test3', false, 'body'),
      ];
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
          TodoFormComponent, // декларируем проверяемый компонент
        ],
        providers: [FormBuilder],
        schemas: [ NO_ERRORS_SCHEMA ]
        // Мокирование : не стоит использовать в тесте настоящие экземпляры зависимостей
        // - если внутренняя логика зависимости изменится, придется переписывать сразу два теста — нашего сервиса и зависимости
        // - придется мокировать зависимость второго порядка.
        // - зависимости тянут за собой другие зависимости а они могут быть тяжелыми и ресурсоемкими
      })
        .overrideComponent(TodoFormComponent, {
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
          fixture = TestBed.createComponent(TodoFormComponent); // создать экземпляр компонента.
          // get test component from the fixture
          component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
          compiled = fixture.debugElement.nativeElement; // Свойство возвращает объект DOM, представляющий управляющиэлемент для компонента
          fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
        });
    })
  );


/*
  it('should Create TodoFormComponent', async(() => {
    console.log('- TEST "Create" TodoFormComponent - work');
  }));
*/
/*
  it(`should Create NEW Task`, async(() => {
    console.log('- TEST "Create NEW Task" TodoFormComponent - work');
    component.formValidations.controls['inputTitle'].setValue('Title');
    component.formValidations.controls['inputBody'].setValue('Body');

    component.createTasks();

    expect(component).toBeTruthy();
  }));
*/


// todo : доделать валидацию реактивной вормы
// 1) пример  = https://medium.com/@paynoattn/angular2-formbuilder-unit-tests-9da5ef5dbbe5
// 2) https://codecraft.tv/courses/angular/unit-testing/model-driven-forms/
// 3) https://stackoverflow.com/questions/36335019/method-to-set-value-and-update-validity-of-form-control

  // create reusable function for a dry spec.
  function updateForm(userEmail, userPassword) {
    component.formValidations.controls['inputTitle'].setValue(userEmail);
    component.formValidations.controls['inputBody'].setValue(userPassword);
  }

  it('form value should update from form changes', fakeAsync(() => {
    updateForm('valid@asd.mail', 'valid123');
    expect(component.formValidations).toEqual(true);
  }));
  it('isValid should be false when form is invalid', fakeAsync(() => {
    updateForm('', '');
    expect(component.formValidations).toBeFalsy(false);
  }));
});
