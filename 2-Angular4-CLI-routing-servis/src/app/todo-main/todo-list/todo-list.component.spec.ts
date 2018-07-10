/*

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {

  let fixture: ComponentFixture<TodoListComponent>;
  let app;
  let compiled;
  let component: TodoListComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ], // декларируем router-outlet  - FormsModule в етом компоненте ненужен
      declarations: [
        TodoListComponent, // декларируем проверяемый компонент
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent); // создать экземпляр компонента / Этот компонент является экземпляром нашего класса.
    app = fixture.debugElement.componentInstance; // DebugElement, связанный с корневым элементом этого компонента. / Экземпляр корневого компонента.
    compiled = fixture.debugElement.nativeElement; // DebugElement, связанный с корневым элементом этого компонента. / Нативный элемент в корне компонента.
    component = fixture.componentInstance; // Экземпляр корневого компонента.
    fixture.detectChanges();
  });

  it('should Create TodoListComponent', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should "Unchecked" Fist tasks`, async(() => {
    const objList = component.ObjectTodos[0]; // obj from "src/app/shared/data.ts'

    expect(objList.completed).toBeTruthy(); // default state in data "src/app/shared/data.ts'

    component.onCheck(objList);
    fixture.detectChanges();

    expect(objList.completed).toBeFalsy(); // state after click
  }));

  it(`should "Delete" Fist tasks`, async(() => {
    const arrList = component.ObjectTodos;

    component.onDelete(arrList[0]);
    fixture.detectChanges();

    expect(arrList.length - 1).toBe(arrList.length - 1);
  }));

});

*/
