import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import {TodoFormComponent} from './todo-form.component';
import {TodoServiceService} from '../../_shared/_todo-service.service';
import {ObjectTypes} from '../../_shared/ObjectTypes';

describe('TodoFormComponent', () => {

    let fixture: ComponentFixture<TodoFormComponent>;
    let component: TodoFormComponent;
    let compiled;

    const mockRepository = {
        getProducts: function () {
            return [
                new ObjectTypes(1, 'test1', true, 'body1'),
                new ObjectTypes(2, 'test2', false, 'body2'),
                new ObjectTypes(3, 'test3', false, 'body3'),
            ];
        }
    };

    const MockTestDB =  [
        {
            id: 0,
            title: '1 learning HTML/CSS',
            completed : true,
            body: 'Great'
        },
        {
            id: 1,
            title: '2 learning JavaScript',
            completed : true,
            body: 'Ideally'
        },
        {
            id: 2,
            title: '3 learning Angular CLI',
            completed : false,
            body: 'Angular CLI - Perfectly'
        },
        {
            id: 3,
            title: '4 learning ReactJS',
            completed : false,
            body: 'in perspective'
        }
    ];

    class MockTodoService {
        public getDateBaseTodos() {
            return MockTestDB;
        }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [
                TodoFormComponent, // декларируем проверяемый компонент
            ],
            providers: [
                // https://habr.com/post/349380/
                // Не стоит путать useValue и provide. Это разные объекты: первый — клон второго.
                { provide: TodoServiceService, useValue: MockTodoService }
            ]
        }).compileComponents();
    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(TodoFormComponent); // создать экземпляр компонента.
        component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
        compiled = fixture.debugElement.nativeElement; // Свойство возвращает объект DOM, представляющий управляющиэлемент для компонента
        fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
    });

    it('should Create TodoFormComponent', async(() => {
        expect(component).toBeTruthy();
    }));

/*

    // нужно подминить сервис на тестируемый.
    it(`should Create NEW Task`, async(() => {
        component.newTodoTitle = 'NEW Title Task';
        component.newTodoTitle = 'NEW Body Task';

        const listTitle = component.newTodoTitle;
        const listBody = component.newTodoBody;

        component.createTasks();
        fixture.detectChanges();

        // expect(objList.length + 1).toBe(objList.length + 1); // state after click
    }));
*/

});

