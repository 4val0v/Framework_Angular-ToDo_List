# [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.
# TODO: Навести порядок с описанием в файлах "README.md" .
# TODO: Допистать тесты к каждому примеру.

Start :
```bash
ng new foo --style=styl
cd foo
ng serve
```



## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

You can configure the default HTTP host and port used by the development server with two command-line options :

```bash
ng serve --host 0.0.0.0 --port 4201

or in package.json

"scripts": {
  "start": "ng serve --host=0.0.0.0 --port=4400 --public 165.227.157.10",
}
```

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

##### For example:
```bash
ng generate component my-new-component
ng g component my-new-component      # using the alias
```
```bash
компоненты поддерживают относительное формирование путей
##### Если вы в дериктории  src/app/feature/ и запустите в консоле
``` ng g component new-cmp  ```
##### Ваш компонент будет в  src/app/feature/new-cmp
##### Но если запустить
``` ng g component ../newer-cmp  ```
##### Ваш компонент будет сгенерирован в  src/app/newer-cmp
##### В дериктории src/app вы также можете запустить
``` ng g component feature/new-cmp  ```
##### и Ваш компонент будет сгенерирован в  src/app/feature/new-cmp
```
You can find all possible blueprints in the table below:

Scaffold        | Usage
---             | ---
[Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g component my-new-component`
[Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g directive my-new-directive`
[Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe)           | `ng g pipe my-new-pipe`
[Service](https://github.com/angular/angular-cli/wiki/generate-service)     | `ng g service my-new-service`
[Class](https://github.com/angular/angular-cli/wiki/generate-class)         | `ng g class my-new-class`
[Guard](https://github.com/angular/angular-cli/wiki/generate-guard)         | `ng g guard my-new-guard`
[Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g interface my-new-interface`
[Enum](https://github.com/angular/angular-cli/wiki/generate-enum)           | `ng g enum my-new-enum`
[Module](https://github.com/angular/angular-cli/wiki/generate-module)       | `ng g module my-module`

-----
### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

-----
### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

-----
### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

-----
### Further help
To get more help on the Angular CLI use `ng --help` or go check out the
[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

-----
### Documentation
The documentation for the Angular CLI

[wiki github](https://github.com/angular/angular-cli/wiki).

[API Documentation](https://docs.angularjs.org/api)

[Tutorial](https://docs.angularjs.org/tutorial)

-----
# plug-ins and add-ons :
 Scaffold               |
 ---                    |
 [1) API ngx-bootstrap ENG](https://valor-software.com/ngx-bootstrap/#/)     |
 [+ Сomponent bootstrap RUS](http://bootstrap-3.ru/components.php)     |
 [2) Material. ENG](https://material.angular.io/components/slider/overview)     |
 [3) Parallax. ENG](http://matthew.wagerfield.com/parallax/)   |
 [4) FullPage.js ENG](https://github.com/alvarotrigo/fullPage.js#fullpagejs)   |
 [5) animate.css ENG](https://daneden.github.io/animate.css/)   |

#### 1) [Adding ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap/blob/development/docs/getting-started/ng-cli.md) :

 - install `ngx-bootstrap` and `bootstrap`

 ```bash
   npm install ngx-bootstrap bootstrap --save
 ```


- open `src/app/app.module.ts` and add

```typescript
import { AlertModule } from 'ngx-bootstrap';
...

@NgModule({
   ...
   imports: [AlertModule.forRoot(), ... ],
    ...
})
```

- open `.angular-cli.json` and insert a new entry into the styles array

```json
      "styles": [
         "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css",
      ],
```
#### 2) [Material. ENG](https://material.angular.io/components/slider/overview)
###### Step 1: Install Angular Material
```bash
npm install --save @angular/material @angular/cdk
```

###### Step 2: Animations

Some Material components depend on the Angular animations module in order to be able to do
more advanced transitions. If you want these animations to work in your app, you have to
install the `@angular/animations` module and include the `BrowserAnimationsModule` in your app.
```bash
npm install --save @angular/animations
```

```ts
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }
```
If you don't want to add another dependency to your project, you can use the `NoopAnimationsModule`.

```ts
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [NoopAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }
```
######  Step 3: Import the component modules

Import the NgModule for each component you want to use:

```ts
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  ...
  imports: [MatButtonModule, MatCheckboxModule],
  ...
})
export class PizzaPartyAppModule { }
```

###### Step 4: Include a theme

Including a theme is **required** to apply all of the core and theme styles to your application.

To get started with a prebuilt theme, include one of Angular Material's prebuilt themes globally
in your application.
If you're using the Angular CLI, you can add this to your `styles.css`:
```css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

###### Step 5 (Optional): Add [Material Icons](https://material.io/icons/)

If you want to use the `mat-icon` component with the official
[Material Design Icons](https://material.io/icons/), load the icon font in your `index.html`.

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
use `<i class="material-icons">&#xE86C;</i>`
or `<i class="material-icons">check_circle</i>`


#### 3) [Parallax. ENG](http://matthew.wagerfield.com/parallax/)

[my works-clone in git v2.1.3](https://github.com/SnisarOnline/works-parallax.js-2.1.3-)

[Parallax.git v2.1.3](https://github.com/wagerfield/parallax/tree/v2.1.3)

```html
  <ul id="scene">
    <li class="layer" data-depth="0.00"><img src="layer1.png"></li>
    <li class="layer" data-depth="0.20"><img src="layer2.png"></li>
    <li class="layer" data-depth="0.40"><img src="layer3.png"></li>
    <li class="layer" data-depth="0.60"><img src="layer4.png"></li>
    <li class="layer" data-depth="0.80"><img src="layer5.png"></li>
    <li class="layer" data-depth="1.00"><img src="layer6.png"></li>
  </ul>
                      or

  <div id="scene">
    <div class="img layer" data-depth="1.00" ></div>
    <div class="img layer" data-depth="10.0" ></div>
    <div class="img layer" data-depth="20.0" ></div>
  </div>
```
```js
add in js :
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);


and it will work

(function() {
  var scene = document.querySelectorAll('#scene');
  for(var i=0; i <= scene.length; i++ ){
    var parallax = new Parallax(scene[i]);
    parallax.onMouseMove
  }
}());

```

#### 4) [FullPage.js ENG](https://github.com/alvarotrigo/fullPage.js#fullpagejs) лень было норм сделать


files name include :

fullPage.css

fullPage.min.js

fullPage_options.js

scrolloverflow.min.js

###### Including files:
```html
<link rel="stylesheet" type="text/css" href="jquery.fullPage.css" />

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<!-- This following line is optional. Only necessary if you use the option css3:false and you want to use other easing effects rather than "linear", "swing" or "easeInOutCubic". -->
<script src="vendors/jquery.easings.min.js"></script>


<!-- This following line is only necessary in the case of using the option `scrollOverflow:true` -->
<script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>

<script type="text/javascript" src="jquery.fullPage.js"></script>
```



###### [Структура Html](https://github.com/alvarotrigo/fullPage.js)
```html
<div id="fullpage">
  <div class="section active" id="section0">
    *****content****
  </div>
  <div class="section " id="section1">
    *****content****
  </div>
  <div class="section " id="section2">*****content****</div>
  <div class="section " id="section3">*****content****</div>
  <div class="section " id="section4">*****content****</div>
</div>
```


###### [Minimal: options.js](https://github.com/alvarotrigo/fullPage.js)
```js
  $(document).ready(function() {
    $('#fullpage').fullpage({
      //Navigation
      navigation: true,  // Если установлено значение true, на экране появится панель навигации, состоящая из небольших кругов.
      lockAnchors: true, //  будут ли анкеры иметь какой-либо эффект в URL-адресе или нет.
      navigationPosition: 'right', // положение дот-навигации
      navigationTooltips: ['Home', 'Technologies', 'Price', 'Portfolio', 'Our Team', 'Blog', 'Contact'], // всплываюшие подсказки в дот-навигации
      showActiveTooltip: false, // постоянное отображение всплывающей подсказки
      slidesNavigation: false,
      slidesNavPosition: 'bottom', // Определяет позицию для панели навигации ландшафта для ползунков. Принимает значения сверху и снизу.

      //Design
      verticalCentered: true,
      responsiveWidth: 700, // размеры после которых неработает авто скрол
      responsiveHeight: 500, // размеры после которых неработает авто скрол
      responsiveSlides: true,
    });
  });

```
