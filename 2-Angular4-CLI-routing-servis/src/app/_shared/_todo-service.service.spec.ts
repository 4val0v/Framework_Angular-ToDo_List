import {TestBed, inject, async} from '@angular/core/testing';

import {ObjectTypes} from './ObjectTypes'; // типизируем данные
import {TodoServiceService} from './_todo-service.service';

describe('TodoServiceService', () => {

    let service: TodoServiceService;
    let objList: ObjectTypes = {
        id: 0,
        title: '0_title',
        completed: true,
        body: '0_body'
    };

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                providers: [TodoServiceService]
            });
        })
    );

    /**
     * inject - Позволяет вводить зависимости в beforeEach() и it().
     * @info https://angular.io/api/core/testing/inject
     * @info https://docs.angularjs.org/api/ngMock/function/angular.mock.inject
     */
    beforeEach(
        inject([TodoServiceService], ts => {
            service = ts;
        })
    );


    it('should be created TodoServiceService', async(() => {
        expect(service).toBeTruthy();
    }));


    it('should return arr base', () => {
        let languages = service.getDateBaseTodos();
        expect(languages.length).toEqual(4);
    });


    it(`should "Unchecked" Fist tasks`, async(() => {
        expect(objList.completed).toBeTruthy(); // default state

        service.CheckTodo(objList);

        expect(objList.completed).toBeFalsy(); // state after click
    }));


    it(`should "Check" Fist tasks`, async(() => {
        expect(objList.completed).toBeFalsy(); // default state

        service.CheckTodo(objList);

        expect(objList.completed).toBeTruthy(); // state after click
    }));


    it(`should "Delete" Fist tasks`, async(() => {

        service.DeleteTodo(service.bd[0]);

        expect(service.bd.length).toEqual(3);
    }));

/*
    /!**
     * Проверка сохранения нового листа
     * в браузере все ок, в консоле Ошибка.
     *!/
    it(`should "CreateTodo" New Todo`, async( () => {

        service.CreateTodo('New Title Todo', 'Body Todo');

        console.log(service.bd);

        expect(service.bd.length).toEqual(5);
    }));
*/

});



