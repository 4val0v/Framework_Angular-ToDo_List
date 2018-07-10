import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router'; // пример как перехватывать данные роутинга

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.styl']
})
export class TodoMainComponent implements OnInit {

  constructor() { }
  // constructor(private route: ActivatedRoute) { } // пример как перехватывать данные роутинга

  ngOnInit() {
    // пример как перехватывать данные роутинга и выводить
    // this.route.params.subscribe(
    //   par => {
    //     console.log(' params : ', par);
    //   }
    // );
  }

}
