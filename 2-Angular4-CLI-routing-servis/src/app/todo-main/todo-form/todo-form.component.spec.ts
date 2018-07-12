import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import {TodoFormComponent} from './todo-form.component';
import {TodoServiceService} from '../../_shared/_todo-service.service';
import {ObjectTypes} from '../../_shared/ObjectTypes';

describe('TodoFormComponent', () => {

    let fixture: ComponentFixture<TodoFormComponent>;
    let component: TodoFormComponent;
    let compiled;

    // фейковый сервис
    const mockService = {
        bd: [],
        CreateTodo: function (title: string, body: string) {
            console.log('Create TEST Tasks :  работает фейковый сервер');

            const newTask = {'id': this.bd.length, 'title': title, 'body': body};
            this.bd.push(newTask);

            console.log('Create TEST Tasks : ', this.bd);

            return this.bd;
        },
        getProducts: function () {
            return [
                new ObjectTypes(1, 'test1', true, 'body'),
                new ObjectTypes(2, 'test2', false, 'body'),
                new ObjectTypes(3, 'test3', false, 'body'),
            ];
        }
    };

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                imports: [FormsModule],
                declarations: [
                    TodoFormComponent, // декларируем проверяемый компонент
                ],
                providers: [
                    // https://habr.com/post/349380/
                    // Не стоит путать useValue и provide. Это разные объекты: первый — клон второго.
                    {provide: TodoServiceService, useValue: mockService} // Делаем Подмену сервиса на фейковый для тестов.
                ]
                // Мокирование : не стоит использовать в тесте настоящие экземпляры зависимостей
                // - если внутренняя логика зависимости изменится, придется переписывать сразу два теста — нашего сервиса и зависимости
                // - придется мокировать зависимость второго порядка.
                // - зависимости тянут за собой другие зависимости а они могут быть тяжелыми и ресурсоемкими
            }).compileComponents();
        })
    );


    beforeEach(() => {
        fixture = TestBed.createComponent(TodoFormComponent); // создать экземпляр компонента.
        component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
        compiled = fixture.debugElement.nativeElement; // Свойство возвращает объект DOM, представляющий управляющиэлемент для компонента
        fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
    });


    it('should Create TodoFormComponent', async(() => {
        expect(component).toBeTruthy();
    }));

    it(`should Create NEW Task`, async(() => {
        component.newTodoTitle = 'TEST NEW Task Title';
        component.newTodoBody = 'TEST NEW Task Body';

        const asd = spyOn(component, 'createTasks'); // https://habr.com/post/169699/

        component.createTasks();

        expect(asd).toHaveBeenCalled();

        fixture.detectChanges();

        // mockService.CreateTodo( 'title', 'body');
        // console.log(mockService.bd);
    }));

});