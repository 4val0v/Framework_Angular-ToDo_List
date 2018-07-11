import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import {TodoMainComponent} from './todo-main.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoServiceService} from '../_shared/_todo-service.service';

describe('TodoMainComponent', () => {

    let component: TodoMainComponent;
    let fixture: ComponentFixture<TodoMainComponent>;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule // декларируем привязки типо [(ngModel)]
            ],
            declarations: [
                TodoMainComponent, // декларируем проверяемый компонент
                TodoFormComponent, // декларируем внутриний компонент
                TodoListComponent, // декларируем внутриний компонент
            ],
            providers: [TodoServiceService], // декларируем подключенный сервис в дочерних компонентах.
            schemas: []
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoMainComponent); // создать экземпляр компонента.
        component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
        compiled = fixture.debugElement.nativeElement; // Свойство возвращает объект DOM, представляющий управляющиэлемент для компонента
        fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
    });


    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));

});
