import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import {TodoListComponent} from './todo-list.component';
import {TodoServiceService} from '../../_shared/_todo-service.service';
import {ObjectTypes} from '../../_shared/ObjectTypes';

describe('TodoListComponent', () => {

    let fixture: ComponentFixture<TodoListComponent>;
    let component: TodoListComponent;
    let compiled;

    // фейковый сервис
    const mockService = {
        bd: [
            {
                id: 0,
                title: 'TEST - - HTML/CSS',
                completed : true,
                body: 'TEST'
            },
            {
                id: 1,
                title: 'TEST - - JavaScript',
                completed : true,
                body: 'Ideally'
            }
        ],
        getDateBaseTodos: function() {
            return this.bd;
        },
        CheckTodo: function ( checkbox: ObjectTypes ) {
            console.log('Check TEST Todo :  работает фейковый сервер');

            this.bd[0] = !checkbox.completed;

            return this.bd;
        },
        DeleteTodo: function ( del: ObjectTypes ) {
            console.log('Delete TEST Todo :  работает фейковый сервер');

            const index = this.bd.indexOf(del);
            if (index > -1) {
                this.bd.splice(index, 1);
            }
        }
    };

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                imports: [ FormsModule ],
                declarations: [ TodoListComponent ],
                providers: [
                    // https://habr.com/post/349380/
                    // Не стоит путать useValue и provide. Это разные объекты: первый — клон второго.
                    {provide: TodoServiceService, useValue: mockService} // Делаем Подмену сервиса на фейковый для тестов.
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListComponent); // создать экземпляр компонента.
        component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
        compiled = fixture.debugElement.nativeElement; // Свойство возвращает объект DOM, представляющий управляющиэлемент для компонента
        fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
    });

    it('should Create TodoListComponent', async(() => {
        expect(component).toBeTruthy();
    }));

    it(`should "Unchecked" Fist tasks`, async(() => {
        const objList = component.ObjectTodos[0];

        const asd = spyOn(component, 'onCheck'); // https://habr.com/post/169699/

        component.onCheck(component.ObjectTodos, objList);

        fixture.detectChanges();

        expect(asd).toHaveBeenCalled();
    }));

    it(`should "Delete" Fist tasks`, async(() => {
        const objList = component.ObjectTodos[0];

        const asd = spyOn(component, 'onDelete'); // https://habr.com/post/169699/

        component.onDelete(component.ObjectTodos, objList);

        fixture.detectChanges();

        expect(asd).toHaveBeenCalled();
    }));

});