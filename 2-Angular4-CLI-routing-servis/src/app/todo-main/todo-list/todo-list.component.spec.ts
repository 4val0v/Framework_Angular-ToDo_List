import {TestBed, async, ComponentFixture, inject} from '@angular/core/testing';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Location, CommonModule } from '@angular/common';
/*
    зависимости для routerLink тестирования
    =  https://stackoverflow.com/questions/39577920/angular-2-unit-testing-components-with-routerlink/39587397
*/
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {By} from '@angular/platform-browser';

import {TodoListComponent} from './todo-list.component';
import {TodoServiceService} from '../../_shared/_todo-service.service';
import {ObjectTypes} from '../../_shared/ObjectTypes';

describe('TodoListComponent', () => {

    let fixture: ComponentFixture<TodoListComponent>;
    let component: TodoListComponent;
    let compiled;

    /* фейковый сервис */
    const mockService = {
        bd: [
            {
                id: 0,
                title: 'TEST - - HTML/CSS',
                completed: true,
                body: 'TEST'
            },
            {
                id: 1,
                title: 'TEST - - JavaScript',
                completed: true,
                body: 'Ideally'
            }
        ],
        getDateBaseTodos: function () {
            console.log('- TEST  "getBase" :  работает фейковый сервер');
            return this.bd;
        },
        CheckTodo: function (checkbox: ObjectTypes) {
            console.log('- TEST "Check" :  работает фейковый сервер');
            let base = this.bd;

            base[checkbox.id].completed = !checkbox.completed;
            return this.bd = base;
            // return checkbox.completed = !checkbox.completed;
        },
        DeleteTodo: function (del: ObjectTypes) {
            console.log('- TEST "Delete":  работает фейковый сервер');
            let base = this.bd;
            const index = base.indexOf(del);
            if (index > -1) {
                base.splice(index, 1);
                return this.bd = base;
            }
        }
    };
    /* фейковый сервис */

    // тестовый компонент для перехода по урлам, для теста routerLink
    @Component({
        template: ''
    })
    class DummyComponent {}

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                FormsModule,
                RouterTestingModule.withRoutes([
                    // Настраиваем параметры роутинга
                    // https://stackoverflow.com/questions/39577920/angular-2-unit-testing-components-with-routerlink/39587397
                    { path: 'todo/:id', component: DummyComponent }
                ])
            ],
            declarations: [TodoListComponent, DummyComponent],
            providers: [
                // подставной сервис и бек
                // =  https://stackoverflow.com/questions/39472364/testing-cant-resolve-all-parameters-for-classname/39483673#39483673
                // https://stackoverflow.com/questions/40003575/angular-2-error-no-provider-for-http-in-karma-jasmine-test
                // {prototype:ProjectService, provide: ProjectsModule, useValue: mockRepository}
                // https://habr.com/post/349380/
                // Не стоит путать useValue и provide. Это разные объекты: первый — клон второго.
                {provide: TodoServiceService, useValue: mockService} // Делаем Подмену сервиса на фейковый для тестов.
            ]
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

    it(`should press "Unchecked" Fist tasks`, async(() => {
        console.log('- TEST "Unchecked" TodoListComponent success');

        const objList = component.ObjectTodos[0];
        const asd = spyOn(component, 'onCheck'); // https://habr.com/post/169699/
        // используется фейковый сервис в котором и вызывается this.todoService.CheckTodo(checkbox);
        component.onCheck(component.ObjectTodos, objList);
        // component.ngOnInit();
        expect(asd).toHaveBeenCalled();
        fixture.detectChanges();
    }));

    it(`should press "Delete" Fist tasks`, async(() => {
        console.log('- TEST "Delete" TodoListComponent success');

        const objList = component.ObjectTodos[0];
        const asd = spyOn(component, 'onDelete'); // https://habr.com/post/169699/
        // подставится фейковый сервис в нутри етой функции "onDelete"
        component.onDelete(component.ObjectTodos, objList);
        // component.ngOnInit();
        expect(asd).toHaveBeenCalled();
        fixture.detectChanges();
    }));

    it('should go to url', async(
            inject([Router, Location], (router: Router, location: Location) => {
                console.log('- TEST "[routerLink]" TodoListComponent success');

                fixture.debugElement.query(By.css('a')).nativeElement.click(); // имитация нажатия
                fixture.whenStable().then(() => {
                    // переходит по первому линку поетому первый елемент масива 0 и незабываем что унас фейковый сервис
                    expect(location.path()).toEqual('/todo/0');
                });
            })
    ));
});
