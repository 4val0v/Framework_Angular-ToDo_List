/*
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {TodoDetailedComponent} from './todo-detailed.component';

describe('TodoDetailedComponent', () => {
    let fixture: ComponentFixture<TodoDetailedComponent>; // экземпляр компонента.
    let component: TodoDetailedComponent; // объект компонента
    let compiled; // объект DOM, представляющий управляющиэлемент для компонента

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoDetailedComponent],
            providers: [
                { // Делаем Подмену сервиса на фейковый для тестов.
                    provide: ActivatedRoute,
                    useValue: {
                        params: Observable.of( {id: 123} )
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoDetailedComponent); // создать экземпляр компонента.
        component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
        compiled = fixture.debugElement.nativeElement; // Свойство возвращает объект DOM, представляющий управляющиэлемент для компонента
        fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
    });

    it('should be created', async(() => {
        expect(component).toBeTruthy();
    }));
});

*/
