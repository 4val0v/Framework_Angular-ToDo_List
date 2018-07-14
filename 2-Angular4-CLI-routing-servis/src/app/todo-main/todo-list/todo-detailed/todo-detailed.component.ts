import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'; // для перехвата данных с роутинга к примеру :Id
import {TodoServiceService} from '../../../_shared/_todo-service.service'; // серви откуда получаем данные
import {ObjectTypes} from '../../../_shared/ObjectTypes'; // описание типа обьекта

@Component({
    selector: 'app-todo-detailed',
    templateUrl: './todo-detailed.component.html',
    styleUrls: ['./todo-detailed.component.styl']
})
export class TodoDetailedComponent implements OnInit {

    ObjectTodo: ObjectTypes; // а теперь ето привяжем в HTML вестку

    constructor(private activatedRoute: ActivatedRoute,
                private Rout: Router,
                private service: TodoServiceService) {}

    ngOnInit() {
        // Детальный обзор Выбранного обьекта из масива
        // params -
        // subscribe -(из библ.RxJs) подписываемся на обновление
        // activatedRoute.params.subscribe(param => console.log(param));

        this.activatedRoute.params.subscribe((params) => {
            // params.id; // получили id который был выбран (пришел как обьект в params)
            this.ObjectTodo = this.service.getDateBaseTodos(params.id);

            console.log('Выбранный обьект : ', this.ObjectTodo);
        });

    }

    returnHistory() {
        this.Rout.navigate(['/']);
    }
}
