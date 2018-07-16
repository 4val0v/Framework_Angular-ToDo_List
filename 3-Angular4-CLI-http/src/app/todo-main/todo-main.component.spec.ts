import {TestBed, async, ComponentFixture} from '@angular/core/testing';
// [routerLink] = https://stackoverflow.com/questions/39577920/angular-2-unit-testing-components-with-routerlink/39587397
import {FormsModule} from '@angular/forms'; // декларируем привязки типо [(ngModel)]
import {RouterTestingModule} from '@angular/router/testing'; // декларируем привязки типо [routerLink]
import {By} from '@angular/platform-browser'; // для поска елемента на странице

import {TodoMainComponent} from './todo-main.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoServiceService} from '../_shared/_todo-service.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('TodoMainComponent', () => {

    let component: TodoMainComponent;
    let fixture: ComponentFixture<TodoMainComponent>;
    let compiled;


    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                imports: [
                    FormsModule, // декларируем привязки типо [(ngModel)]
                    RouterTestingModule // декларируем привязки типо [routerLink]
                ],
                declarations: [
                    TodoMainComponent, // декларируем проверяемый компонент
                    TodoFormComponent, // декларируем внутриний компонент
                    TodoListComponent, // декларируем внутриний компонент
                ],
                providers: [TodoServiceService], // декларируем подключенный сервис в дочерних компонентах.
                // schemas: [ NO_ERRORS_SCHEMA ] // можно проинорировать routerLink в дочерних компонентах.
            });

            TestBed.compileComponents()
                .then(() => {
                    fixture = TestBed.createComponent(TodoMainComponent); // создать экземпляр компонента.
                    component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
                    compiled = fixture.debugElement.nativeElement; // Свойство возвращает объект DOM, представляющий управляющиэлемент для компонента
                    fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
                });
        })
    );
/*

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule, // декларируем привязки типо [(ngModel)]
                RouterTestingModule // декларируем привязки типо [routerLink]
            ],
            declarations: [
                TodoMainComponent, // декларируем проверяемый компонент
                TodoFormComponent, // декларируем внутриний компонент
                TodoListComponent, // декларируем внутриний компонент
            ],
            providers: [TodoServiceService], // декларируем подключенный сервис в дочерних компонентах.
            // schemas: [ NO_ERRORS_SCHEMA ] // можно проинорировать routerLink в дочерних компонентах.
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoMainComponent); // создать экземпляр компонента.
        component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
        compiled = fixture.debugElement.nativeElement; // Свойство возвращает объект DOM, представляющий управляющиэлемент для компонента
        fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
    });

*/


    it('should create TodoMainComponent', async(() => {
        console.log('- TEST "create" TodoMainComponent success');

        expect(component).toBeTruthy();
    }));

    it('the link should be displayed with the correct URL', async(() => {
        console.log('- TEST "[routerLink]" TodoMainComponent success');

        let href = fixture.debugElement.query(By.css('a')).nativeElement
            .getAttribute('href');
        expect(href).toEqual('/todo/0');
    }));

});
