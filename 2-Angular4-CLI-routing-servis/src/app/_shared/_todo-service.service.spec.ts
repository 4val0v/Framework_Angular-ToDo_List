/*
import {TestBed, inject, async} from '@angular/core/testing';

import {TodoServiceService} from './_todo-service.service';

describe('TodoServiceService', () => {


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [TodoServiceService]
        });
    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(TodoServiceService); // создать экземпляр компонента.
        component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
        fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
    });


    it('should be created TodoServiceService', async(() => {
        expect(fixture).toBeTruthy();
    }));


    it(`should "Unchecked" Fist tasks`, async(() => {
        const objList = component.ObjectTodos[0];

        expect(objList.completed).toBeTruthy(); // default state

        component.onCheck(objList);
        fixture.detectChanges();

        expect(objList.completed).toBeFalsy(); // state after click
    }));


    it(`should "Check" Fist tasks`, async(() => {
        const objList = component.ObjectTodos[0];

        expect(objList.completed).toBeFalsy(); // default state

        component.onCheck(objList);
        fixture.detectChanges();

        expect(objList.completed).toBeTruthy(); // state after click
    }));


    it(`should "Delete" Fist tasks`, async(() => {
        const arrList = component.ObjectTodos;

        component.onDelete(arrList[0]);
        fixture.detectChanges();

        expect(arrList.length - 1).toBe(arrList.length - 1);
    }));

});



*/
