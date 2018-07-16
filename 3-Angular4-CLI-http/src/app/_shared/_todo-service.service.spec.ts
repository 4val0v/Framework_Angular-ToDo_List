/*
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
        /!**
         * inject - Позволяет вводить зависимости в beforeEach() и it().
         * @info https://angular.io/api/core/testing/inject
         * @info https://docs.angularjs.org/api/ngMock/function/angular.mock.inject
         *!/
        inject([TodoServiceService], ts => {
            service = ts;
        })
    );

    /!**
     * ТЕСТ активации сервиса
     *!/
    it('should be created TodoServiceService', async(() => {
        console.log('- TEST "created" TodoServiceService success');

        expect(service).toBeTruthy();
    }));

    /!**
     * ТЕСТ получения бд данных
     *!/
    it('should return arr base', () => {
        console.log('- TEST "return base" TodoServiceService success');

        const languages = service.getDateBaseTodos();
        expect(languages.length).toEqual(4);
    });

    /!**
     * ТЕСТ изменения отмеченного 1го листа в фейковой бд
     *!/
    it(`should "Unchecked" Fist tasks`, async(() => {
        console.log('- TEST "Unchecked" TodoServiceService success');

        expect(objList[0].completed).toBeTruthy(); // default state
        service.CheckTodo(objList[0]);
        expect(objList[0].completed).toBeFalsy(); // state after click
    }));

    /!**
     * ТЕСТ изменения отмеченного 2го листа в фейковой бд
     *!/
    it(`should "Check" second tasks`, async(() => {
        console.log('- TEST "Check" TodoServiceService success');

        expect(objList[1].completed).toBeFalsy(); // default state
        service.CheckTodo(objList[1]);
        expect(objList[1].completed).toBeTruthy(); // state after click
    }));

    /!**
     * ТЕСТ удаления 4го листа
     *!/
    it(`should "Delete" Last(#4) tasks`, async(() => {
        console.log('- TEST "Delete" TodoServiceService ');

        const serviceBD = service.getDateBaseTodos();
        const coutTasks = serviceBD.length;
        // удаляем не 1й елемент потому что следуйший тест (the link should be displayed with the correct URL) в todo-main завалится.
        service.DeleteTodo(serviceBD[coutTasks - 1]);
        expect(serviceBD.length).toEqual(coutTasks - 1);
    }));

    /!**
     * ТЕСТ сохранения нового листа
     *!/
    it(`should "CreateTodo" New Todo`, async( () => {
        console.log('- TEST "CreateTodo" TodoServiceService ');

        const coutTasks = service.bd.length; // количество тасков до создания нового
        service.CreateTodo('New Title Todo', 'Body Todo');

        expect(service.bd.length).toEqual(coutTasks + 1);
    }));

});



*/
