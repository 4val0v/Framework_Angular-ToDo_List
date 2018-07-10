import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'; // для router-outlet
import {FormsModule} from '@angular/forms'; // для привязки типо [(ngModel)]

import { TodoListComponent } from './todo-list.component'; // для проверяемый компонент

describe('TodoListComponent', () => {

  let fixture: ComponentFixture<TodoListComponent>;
  let app;
  let compiled;
  let component: TodoListComponent;

// Используется перед каждым запуском теста
//// Для тестов необходимо, чтобы компоненты скомпилировались до того, как через метод createComponent() будут созданы их экземпляры.
  beforeEach(
//// Поэтому тело первого BeforeEach мы поместили в asynс метод, благодаря чему его содержимое выполняется в специальной асинхронной среде.
//// И пока не будет выполнен метод compileComponents(), следующий BeforeEach не запустится:
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule, // декларируем router-outlet
          FormsModule // декларируем привязки типо [(ngModel)]
        ],
        declarations: [
          TodoListComponent, // декларируем проверяемый компонент
        ]
      }).compileComponents(); // compileComponents — метод, делающий вынесенные в отдельные файлы стили и шаблон встроенными.
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent); // создать экземпляр компонента.
    app = fixture.debugElement.componentInstance; //  Экземпляр корневого компонента.
    compiled = fixture.debugElement.nativeElement; // Нативный элемент в корне компонента.
    component = fixture.componentInstance; // Экземпляр корневого компонента.
    fixture.detectChanges(); // detectChanges - мы инициализируем компонент.
  });

  it('should Create TodoListComponent', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should "Unchecked" Fist tasks`, async(() => {
    const objList = component.ObjectTodos[0]; // obj from "src/app/shared/data.ts'

    expect(objList.completed).toBeTruthy(); // default state in data "src/app/shared/data.ts'

    component.onCheck(objList);
    fixture.detectChanges(); // detectChanges - мы инициализируем компонент.

    expect(objList.completed).toBeFalsy(); // state after click
  }));

  it(`should "Delete" Fist tasks`, async(() => {
    const arrList = component.ObjectTodos;

    component.onDelete(arrList[0]);
    fixture.detectChanges(); // detectChanges - мы инициализируем компонент.

    expect(arrList.length - 1).toBe(arrList.length - 1);
  }));

});
