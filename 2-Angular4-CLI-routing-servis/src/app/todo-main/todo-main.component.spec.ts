import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {FormsModule} from '@angular/forms'; // FormsModule в етом компоненте нужен для дочерних компонентов
import {NO_ERRORS_SCHEMA} from '@angular/core'; // игнорирование селекторов подключаемых компонентов.

import { TodoMainComponent } from './todo-main.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoServiceService } from '../_shared/_todo-service.service';


describe('TodoMainComponent', () => {

    let component: TodoMainComponent;
    let fixture: ComponentFixture<TodoMainComponent>;
    let compiled;
    let app;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                TodoMainComponent, // декларируем проверяемый компонент
                TodoFormComponent,
                TodoListComponent,
            ],
            // https://habr.com/post/349380/
            // providers: [{provide: PopupService, useValue: popupServiceStub } ]
            // Не стоит путать PopupService и PopupServiceStab. Это разные объекты: первый — клон второго.
            // 1v) popup = TestBed.get(PopupService);
            // 2v) popup = fixture.debugElement.injector.get(PopupService);
            providers: [ TodoServiceService ], // декларируем подключенный сервис в дочерних компонентах.
            schemas: []
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoMainComponent); // создать экземпляр компонента / Этот компонент является экземпляром нашего класса.
        app = fixture.debugElement.componentInstance; // DebugElement, связанный с корневым элементом этого компонента. / Экземпляр корневого компонента.
        compiled = fixture.debugElement.nativeElement; // DebugElement, связанный с корневым элементом этого компонента. / Нативный элемент в корне компонента.
        component = fixture.componentInstance; // Экземпляр корневого компонента.
        fixture.detectChanges();
    });

    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));

});
