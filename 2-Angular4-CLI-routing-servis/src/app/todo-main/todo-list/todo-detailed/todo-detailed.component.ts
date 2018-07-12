import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';  // для перехвата данных с роутинга к примеру :Id
import {TodoServiceService} from '../../../_shared/_todo-service.service'; // серви откуда получаем данные
import {ObjectTypes} from '../../../_shared/ObjectTypes'; // описание типа обьекта
import {_BD} from '../../../_shared/data'; // База данных

@Component({
    selector: 'app-todo-detailed',
    templateUrl: './todo-detailed.component.html',
    styleUrls: ['./todo-detailed.component.styl']
})
export class TodoDetailedComponent implements OnInit {

    ObjectTodos: ObjectTypes; // Наш обьект из базы
    ObjectTodoId = ''; // Id обьекта с роутинга
    ObjectTodo = {}; // а теперь тут привяжем HTML вестку

    constructor(private activatedRoute: ActivatedRoute, private service: TodoServiceService) {
    }

    ngOnInit() {
        // Детальный обзор Выбранного обьекта из масива
        // params -
        // subscribe -(из библ.RxJs) подписываемся на обновление
        // ar.params.subscribe(param => console.log(param));
        /*      Костыль * * * * * * * * * *
                this.activatedRoute.params.subscribe(param => {
                    this.ObjectTodoId = param.id; // получили id который был выбран (пришел как обьект)
                    this.ObjectTodo = this.ObjectTodos[this.ObjectTodoId]; // получим наш обьект под id
                    console.log('Выбранный обьект : ', this.ObjectTodos[this.ObjectTodoId]);
                });
        */


        // this.activatedRoute.params.subscribe((params: any) => {
        //     // this.ObjectTodoId = params.id; // получили id который был выбран (пришел как обьект)
        //     this.ObjectTodos = this.service.getDateBaseTodos(params.id);
        //
        //     console.log('Выбранный обьект : ', this.ObjectTodos[this.ObjectTodoId]);
        // });

    }
}
