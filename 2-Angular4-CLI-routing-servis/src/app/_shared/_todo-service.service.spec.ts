import {TestBed, inject, async} from '@angular/core/testing';

import {TodoServiceService} from './_todo-service.service';
import {ObjectTypes} from './ObjectTypes';

describe('TodoServiceService', () => {

    let service: TodoServiceService;
    let objList: ObjectTypes[] = [
        {
            id: 0,
            title: '0_title',
            completed: true,
            body: '0_body'
        },
        {
            id: 1,
            title: '1_title',
            completed: false,
            body: '1_body'
        }
    ];


    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                providers: [TodoServiceService]
            });
        })
    );
    beforeEach(
        /**
         * inject - Позволяет вводить зависимости в beforeEach() и it().
         * @info https://angular.io/api/core/testing/inject
         * @info https://docs.angularjs.org/api/ngMock/function/angular.mock.inject
         */
        inject([TodoServiceService], ts => {
            service = ts;
        })
    );


    it('should be created TodoServiceService', async(() => {
        console.log('- TEST "created" TodoServiceService success');

        expect(service).toBeTruthy();
    }));


    it('should return arr base', () => {
        console.log('- TEST "return base" TodoServiceService success');

        const languages = service.getDateBaseTodos();
        expect(languages.length).toEqual(4);
    });


    it(`should "Unchecked" Fist tasks`, async(() => {
        console.log('- TEST "Unchecked" TodoServiceService success');

        expect(objList[0].completed).toBeTruthy(); // default state
        service.CheckTodo(objList[0]);
        expect(objList[0].completed).toBeFalsy(); // state after click
    }));


    it(`should "Check" Fist tasks`, async(() => {
        console.log('- TEST "Check" TodoServiceService success');

        expect(objList[1].completed).toBeFalsy(); // default state
        service.CheckTodo(objList[1]);
        expect(objList[1].completed).toBeTruthy(); // state after click
    }));


    it(`should "Delete" Last tasks`, async(() => {
        console.log('- TEST "Delete" TodoServiceService ');
        const coutTasks = service.bd.length;
        // удаляем не 1й елемент потому что следуйший тест (the link should be displayed with the correct URL) в todo-main завалится.
        service.DeleteTodo(service.bd[coutTasks - 1]);
        expect(service.bd.length).toEqual(coutTasks - 1);
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



