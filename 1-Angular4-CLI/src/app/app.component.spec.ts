/**
 * Ето файлы для тестирования функционала компонентов.
 * Запустить тесты можно командой 'ng test' || 'npm test'
 *
 * @info  https://angular.io/guide/testing
 * @info  https://habr.com/post/349380/
 */
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled;
  let app;

// Используется перед каждым запуском теста
//// Для тестов необходимо, чтобы компоненты скомпилировались до того, как через метод createComponent() будут созданы их экземпляры.
  beforeEach(
    async(() => {
//// Поэтому тело первого BeforeEach мы поместили в asynс метод, благодаря чему его содержимое выполняется в специальной асинхронной среде.
//// И пока не будет выполнен метод compileComponents(), следующий BeforeEach не запустится:
      TestBed.configureTestingModule({
        declarations: [
          AppComponent, // декларируем проверяемый компонент
        ],
        schemas: [ NO_ERRORS_SCHEMA ] // Игнорируем вставляемые компоненты (todo-form / todo-list)
      }).compileComponents(); // compileComponents — метод, делающий вынесенные в отдельные файлы стили и шаблон встроенными.
    })
  );

  // Используется перед каждым запуском теста
  // также есть afterEach() выполняется в конце
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent); // создать экземпляр компонента.
    app = fixture.debugElement.componentInstance; //  Экземпляр корневого компонента.
    compiled = fixture.debugElement.nativeElement; // Нативный элемент в корне компонента.
    component = fixture.componentInstance; // Экземпляр корневого компонента.
    fixture.detectChanges(); // detectChanges - мы инициализируем компонент.
  });

  // Проверим создание экземпляра компонента и его свойства:
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));


  it(`should have as title ' 2Do'`, async(() => {
    expect(app.title).toEqual(' 2Do');
  }));


  it('should render title in a h1 tag', async(() => {
// Далее мы хотим проверить, что переменная компонента title вставляется в DOM.
// При этом мы ожидаем, что ей присвоено значение ' 2Do'.
// А это присваивание происходит при инициализации компонента.
    fixture.detectChanges(); // detectChanges - мы инициализируем компонент.
    expect(compiled.querySelector('h1').textContent).toContain('Angular  2Do!');
  }));

/*
  it(`should set class 'some-class' when clicked`, async(() => {
    let listItem = compiled.querySelector('li');
    listItem.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(compiled.querySelector('li.some-class')).not.toEqual(null);
    });
  }));
*/

});
