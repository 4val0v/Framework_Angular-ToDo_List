/*
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute, Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {TodoDetailedComponent} from './todo-detailed.component';

describe('TodoDetailedComponent', () => {
    let fixture: ComponentFixture<TodoDetailedComponent>; // экземпляр компонента.
    let component: TodoDetailedComponent; // объект компонента
    let compiled; // объект DOM, представляющий управляющиэлемент для компонента

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoDetailedComponent],
            imports: [FormsModule , RouterTestingModule],
            providers: [
                { // Делаем Подмену сервиса на фейковый для тестов.
                    provide: ActivatedRoute,
                    useValue: {
                        params: Observable.of({id: 123})
                        // params: {id: 1}
                    }
                }
            ]
        });

        TestBed
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(TodoDetailedComponent); // создать экземпляр компонента.
                component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
                compiled = fixture.debugElement.nativeElement; // Свойство возвращает объект DOM, представляющий управляющиэлемент для компонента
                fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
            });
    }));

    it('should be created', async(() => {
        expect(component).toBeTruthy();
    }));
});

*/
