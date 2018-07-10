import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {FormsModule} from '@angular/forms'; // FormsModule в етом компоненте ненужен

import {TodoFormComponent} from './todo-form.component';
import {TodoServiceService} from '../../_shared/_todo-service.service';
import {ObjectTypes} from '../../_shared/ObjectTypes';

describe('TodoFormComponent', () => {

    let fixture: ComponentFixture<TodoFormComponent>;
    let app;
    let compiled;
    let component: TodoFormComponent;

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
                { provide: TodoServiceService, useClass: MockTodoService }
            ]
        }).compileComponents();
    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(TodoFormComponent); // создать экземпляр компонента / Этот компонент является экземпляром нашего класса.
        app = fixture.debugElement.componentInstance; // DebugElement, связанный с корневым элементом этого компонента. / Экземпляр корневого компонента.
        compiled = fixture.debugElement.nativeElement; // DebugElement, связанный с корневым элементом этого компонента. / Нативный элемент в корне компонента.
        component = fixture.componentInstance; // Экземпляр корневого компонента.
        fixture.detectChanges();
    });

    it('should Create TodoFormComponent', async(() => {
        expect(app).toBeTruthy();
    }));

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

});

