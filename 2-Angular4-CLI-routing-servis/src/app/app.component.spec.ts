import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'; // декларируем router-outlet
import {FormsModule} from '@angular/forms'; // FormsModule в етом компоненте ненужен

import {AppComponent} from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let compiled;
    let app;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule
            ],
            declarations: [
                AppComponent, // декларируем проверяемый компонент
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent); // создать экземпляр компонента / Этот компонент является экземпляром нашего класса.
        app = fixture.debugElement.componentInstance; // DebugElement, связанный с корневым элементом этого компонента. / Экземпляр корневого компонента.
        compiled = fixture.debugElement.nativeElement; // DebugElement, связанный с корневым элементом этого компонента. / Нативный элемент в корне компонента.
        component = fixture.componentInstance; // Экземпляр корневого компонента.
        fixture.detectChanges();
    });

    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));


    it(`should have as title ' 2Do'`, async(() => {
        expect(app.title).toEqual(' 2Do');
    }));


    it('should render title in a h1 tag', async(() => {
        fixture.detectChanges();
        expect(compiled.querySelector('h1').textContent).toContain('Angular  2Do!');
    }));

});
