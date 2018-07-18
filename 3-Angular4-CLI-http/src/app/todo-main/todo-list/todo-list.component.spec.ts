import {TestBed, async, ComponentFixture, inject} from '@angular/core/testing';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

import {TodoListComponent} from './todo-list.component';
import {TodoServiceService} from '../../_shared/_todo-service.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
import {ObjectTypes} from '../../_shared/ObjectTypes';

describe('TodoListComponent', () => {

  let fixture: ComponentFixture<TodoListComponent>;
  let component: TodoListComponent;
  let compiled;

  class MockMyService {
    getDateBaseTodos(): Observable {}
    CheckTodo(checkbox: ObjectTypes) {
      const Url = ``;
      this.http.put(Url, checkbox)
        .toPromise()
        .then(responses => {
          console.log('Checkbox : ', checkbox.title);
          checkbox.completed = !checkbox.completed;
        });
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        RouterTestingModule
      ],
      declarations: [TodoListComponent],
      providers: [TodoServiceService],
      schemas: [ NO_ERRORS_SCHEMA ] // можно проинорировать routerLink в дочерних компонентах.
    })
      .overrideComponent(TodoListComponent, {
        set: {
          providers: [
            { provide: TodoServiceService, useClass: MockMyService }
          ]
        }
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(TodoListComponent);
        component = fixture.debugElement.componentInstance;
        compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
      });
  }));



  it('should Create TodoListComponent', async(() => {
    console.log('- TEST "Create" TodoListComponent success');

    expect(component).toBeTruthy();
  }));


});


