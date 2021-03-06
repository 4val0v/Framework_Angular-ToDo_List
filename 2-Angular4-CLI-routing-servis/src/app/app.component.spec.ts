/**
 * Модульный тест применяется для тестирования одной логически выделенной и изолированной единицы системы.
 * Чаще всего это метод класса или простая функция (хотя я допускаю и весь класс).
 * Изолированность тестируемой единицы достигается при помощи Заглушек (Stubs, Dummies) и Макетов (Mockups).
 */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'; // декларируем router-outlet
import {FormsModule} from '@angular/forms'; // для привязки типо [(ngModel)] и для дочерних компонентов если не будут игнорироватся.
import {NO_ERRORS_SCHEMA} from '@angular/core'; // игнорирование селекторов подключаемых компонентов.

import {AppComponent} from './app.component';

describe('AppComponent', () => {

    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    let compiled;


    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule, // декларируем router-outlet
                    FormsModule // декларируем привязки типо [(ngModel)]
                ],
                declarations: [
                    AppComponent, // декларируем тестируемый компонент
                ],
                // типов поставщиков (providers) :
                // @info : 1) https://medium.com/front-end-hacking/angular-2-an-introduction-of-bootstrap-and-providers-1c60ffbb7604
                // @info : 2) https://codecraft.tv/courses/angular/dependency-injection-and-providers/providers/
                /*
                  Провайдер класса ( useClass ) :
                   - Использование компонентного процесса
                   - Использование процесса начальной загрузки :
                 */
                /*
                  Aliased Class Provider (useExisting) : Поставщик с псевдонимом класса (использование существующего )
                   - : providers: [ { provide: MandrillService, useClass: GenericEmailService } ]
                      // Всякий раз, когда кто-либо запрашивает MandrillService  мы возвращаем экземпляр GenericEmailService вместо этого.

                   - :
                 */
                /*
                  Value Provider ( useValue ) :
                   -  providers: [{
                        provide: "Config",
                        useValue: {
                        // При использовании useValue:{} объектов значения не могут быть изменены, по сути, он доступен только для чтения.
                          'APIKey': 'XYZ1234ABC',
                          'APISecret': '555-123-111'
                        }
                      }]

                  -  providers: [{
                        provide: "Config",
                        useValue: Object.freeze({
                          'APIKey': 'XYZ1234ABC',
                          'APISecret': '555-123-111'
                        })
                     }]
                */
                /*
                 FactoryProvider ( useFactory ) :
                 -  providers: [{
                        provide: "EmailService",
                        useFactory: () => {
                          // Когда инжектор разрешает этот провайдер, он вызывает  useFactoryфункцию и возвращает все, что возвращается этой функцией в качестве зависимости.
                           if (isProd) {
                              return new MandrillService();
                           } else {
                              return new SendGridService();
                           }
                        }
                    }]

                 -  providers: [{
                      useFactory: () => IS_PROD ? new FakeCarService (): new CarService ()
                      deps: [Http] // вы можете указать массив зависимостей
                    }]
                 */
            });

            TestBed.compileComponents()
                .then(() => {
                    fixture = TestBed.createComponent(AppComponent); // создать экземпляр компонента.
                    component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
                    compiled = fixture.debugElement.nativeElement; // Свойство возвращает объект DOM, представляющий управляющиэлемент для компонента
                    fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
                });
        })
    );

    /*    // Ну или раделить так :

        beforeEach(
            async(() => {
                TestBed.configureTestingModule({
                    imports: [
                        RouterTestingModule, // декларируем router-outlet
                        FormsModule // декларируем привязки типо [(ngModel)]
                    ],
                    declarations: [
                        AppComponent, // декларируем тестируемый компонент
                    ]
                }).compileComponents();
            })
        );

        beforeEach(() => {
            fixture = TestBed.createComponent(AppComponent); // создать экземпляр компонента.
            component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
            compiled = fixture.debugElement.nativeElement; // Свойство возвращает объект DOM, представляющий управляющиэлемент для компонента
            fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
        });

        */


    it('should create the app', async(() => {
        expect(component).toBeTruthy();
        console.log('- TEST "created" app success');
    }));


    it(`should have as title ' 2Do'`, async(() => {
        expect(component.title).toEqual(' 2Do');
        console.log('- TEST "title" app success');
    }));


    it('should render title in a h1 tag', async(() => {
        fixture.detectChanges();
        expect(compiled.querySelector('h1').textContent).toContain('Angular  2Do!');
        console.log('- TEST "title in a h1" app success');
    }));

// TestBed - предоставляет :
// configureTestingModule - Метод используется для настройки тестового модуля Angular
// createComponent - Метод используется для создания экземпляра компонента
// compileComponents - Метод используется для компиляции компонентов
// debugElement - Свойство возвращает тестовый управляющий элемент для компонента
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// debugElement - предоставляет :
// componentInstance - Свойство возвращает объект компонента
// nativeElement - Свойство возвращает объект, представляющий элемент HTML в DOM
// whenStable() - Метод возвращает объект Promise, обрабатываемый при полном применении эффекта операции. За подробностями обращайтесь
//                к разделу «Тестирование с асинхронными операциями»
// children - Свойство возвращает массив объектов DebugElement, представляющих дочерние элементы этого элемента
// query(selectorFunction) - Функции selectorFunction передается объект DebugElement для каждого элемента HTML в шаблоне
//                          компонента; метод возвращает первый объект DebugElement, для которого функция возвращает true
// queryAll(selectorFunction) - Аналог метода query, не считая того, что результат состоит из всех объектов DebugElement, для которых
//                              функция возвращает true
// triggerEventHandler(name,event) - Метод инициирует событие.
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// toBe(value) - М.п., что результат равен заданному значению (при этом он не обязан быть тем же объектом) / ожидаемое значение
// toContain(substring) - Метод проверяет, что результат содержит заданную подстроку
// toEqual(object) - Метод проверяет, что результат является тем же объектом, что и заданное значение
// toMatch(regexp) - Метод проверяет, что результат соответствует заданному регулярному выражению
// toBeDefined() - Метод проверяет, что результат определен
// toBeUndefined() - Метод проверяет, что результат не определен
// toBeNull() - Метод проверяет, что результат равен null
// toBeTruthy() - Метод проверяет, что результат является квазиистинным
// toBeFalsy() - Метод проверяет, что результат является квазиложным
// toBeLessThan(value) - Метод проверяет, что результат меньше заданного значения
// toBeGreaterThan(value) - Метод проверяет, что результат больше заданного значения
});
