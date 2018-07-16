import { Component } from '@angular/core';

// selector - тег для вставки в src/index.html
// templateUrl - что вставим в место selector
// styleUrls - стили для templateUrl
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = ' 2Do';
}
