import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // import привязки типо [(ngModel)]

import { TodoFormComponent } from './todo-form.component'; // import проверяемый компонент

describe('TodoFormComponent', () => {

  let fixture: ComponentFixture<TodoFormComponent>;
  let app;
  let compiled;
  let component: TodoFormComponent;

// Используется перед каждым запуском теста
//// Для тестов необходимо, чтобы компоненты скомпилировались до того, как через метод createComponent() будут созданы их экземпляры.
  beforeEach(
//// Поэтому тело первого BeforeEach мы поместили в asynс метод, благодаря чему его содержимое выполняется в специальной асинхронной среде.
//// И пока не будет выполнен метод compileComponents(), следующий BeforeEach не запустится:
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          FormsModule // декларируем привязки типо [(ngModel)]
        ],
        declarations: [
          TodoFormComponent, // декларируем проверяемый компонент
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent); // создать экземпляр компонента.
    app = fixture.debugElement.componentInstance; //  Экземпляр корневого компонента.
    compiled = fixture.debugElement.nativeElement; // Нативный элемент в корне компонента.
    component = fixture.componentInstance; // Экземпляр корневого компонента.
    fixture.detectChanges(); // detectChanges - мы инициализируем компонент.
  });

  it('should Create TodoFormComponent', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should Create NEW Task`, async(() => {
    component.newTodoTitle = 'NEW Task';
    const objList = component.ObjectTodos;

    component.createTasks();
    fixture.detectChanges();

    expect(objList.length + 1).toBe(objList.length + 1); // state after click
  }));

});
