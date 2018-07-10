/**
 * Created by igor on 10.12.16.
 * @category : Default Gulp rough draft #_1 brain_akademy
 * @version : #_1; full version (for brain_akademy)
 * @ignore : Php
 *
 * @todo : 1) PHP Непотдерживается
 * @todo : 2) watch Работет через плагин
 * @todo : 3) SVG пока без спрайта
 * @todo : 4) ICO пока непотдерживает
 */
'use strict';
//----------------------------------------------
//                  Plagins
//----------------------------------------------
const gulp      = require('gulp'); // Сообственно Gulp JS;
const livereload = require('gulp-livereload'); // Livereload для Gulp работает через плагин в браузере

//----------------------------------------------
//                variables
//                  (new)
//----------------------------------------------
//  variables projects
// var site_name = "AngularJS";
var assets = "dev";
var publication = "Production";
var version = "";

// src_dev: Откуда Берем = Среда разработки
// var dev_src        = 'html/'+ site_name +'/'+ assets +'/**';
var dev_src           = 'Галп Файл снастройками для проекта = '+assets +'; Проект = '+assets +'/**';
var html_dev          = assets +'/html/**/**.html';      // берем и наблдаем за html
var s_retina_dev_src  = assets +'/sprite/**/*.{png,jpeg,jpg}'; // берем  и наблдаем за спрайтами
var s_retina_dev_styl = assets +'/css/';                 // сохраняем стили в dev
var s_retina_dev_img  = assets +'/img/';              // сохраняем картинку в dev
var svg_dev           = assets +'/img/**/*.svg';   // откуда берем svg
var img_dev           = assets +'/img/**/*.{png,jpeg,jpg,gif}'; // берем и наблдаем за ВСЕми картинками кроме SVG и ICO
var fonts_dev         = assets +'/css/fonts/**/*.{eot,otf,ttf,woff,svg,css}';  // берем все Шрифты
var styl_dev          = assets +'/css/**/styles.styl';  // берем СТИЛИ; както добавить (*.css) формат для копирайта.
var styl_dev_Watch    = assets +'/css/**/*.{styl,css}';  // наблдаем за всеми Стилями;
var js_dev            = assets +'/js/**/*.js'; // берем и наблдаем за js;

//src_project: Куда Записываем = Готовый Проект
var project               = publication;
var project_src           = publication +'/'+assets+'/';// Копирование всей папки разработки в корень проекта
var html_project          = publication +'/html/';
var fonts_project         = publication +'/css/fonts/';
var styl_project          = publication +'/css/';
var js_project            = publication +'/js/';
var s_retina_project_img  = publication +'/img/';  // сохр. спрайт ретина (не пригодилась)
var svg_project           = publication +'/img/';  // сохр. мини. svg картинки
var img_project           = publication +'/img/';  // сохр. мини. картинки



//----------------------------------------------
//                Tasks
//  Default options
//-----
gulp.task('default', function() {

    console.log( " =   =   =   =");
    console.log( "+ Дерикт.Разработки  =>  /"+ site_name+' / '+assets);
    console.log( " - Dir_Разработки из =>  " + dev_src );
    console.log( " - Шрифты из .  . =>  " + fonts_dev );
    console.log( " - Стили  из .  . =>  " + styl_dev );
    console.log( " - Спрайты  из .  =>  " + s_retina_dev_src );
    console.log( " - Картинки  из . =>  " + img_dev );
    console.log( " - JavaScript из .  =>  " + js_dev );
    console.log( " -  -  -  -  -  ");
    console.log( "+ дерикт. проектирования =>  /"+ site_name +' / '+ publication +'/'+ version);
    console.log( " - Dir_Дубликат  в .  =>  " + project_src );
    console.log( " - Шрифты и Стили  в  . =>  " + styl_project );
    console.log( " - Картинки и Спрайты в( без ico )=>  " + img_project );
    return console.log( " =   =  gulp --tasks  =   =");

});
//----------------------------------------------
//  + 0 Заглушка
//-----
function lazyRequireTask(taskName, path, options) {
  options = options || {};     // необизательно
  options.taskName = taskName;   // необизательно
  gulp.task(taskName, function(callback) {
    let task = require(path).call(this, options);
    return task(callback);
  });
}

//----------------------------------------------
//  + 0 Удаление + Коппирование
//      (задача через заглушку, без заглушки - в нутри файла )
//-----
lazyRequireTask('dell_all_project', './gulp/task_clean', {
  //src_dev: html_dev, // Вдруг проект захочется вовсе удалить ))
  src_project: project
});
lazyRequireTask('copy_dev', '/var/www/gulp/task_copy', {
  src_dev: dev_src,
  src_project: project_src
});
//----------------------------------------------
//  + 1 HTML
//     (задача через заглушку, без заглушки - в нутри файла )
//-----
lazyRequireTask('html', '/var/www/gulp/task_html', {
  src_dev: html_dev,            // откуда берем
  src_project: html_project  // сохраняем в проект
});
//----------------------------------------------
//  + 2 создаем retina и спрайты и минимизируем все ето
//     (задача через заглушку, без заглушки - в нутри файла )
//-----
lazyRequireTask('1_sprite', '/var/www/gulp/task_img/sprite-retina', {
  src_dev_src : s_retina_dev_src,  // откуда берем
  src_dev_styl: s_retina_dev_styl, // сохраняем стили в dev
  src_dev_img : s_retina_dev_img  // сохраняем картинку в dev
  // src_project: s_retina_project_img  // сохраняем в проект
});
//----------------------------------------------
//  + 3 создаем SVG и спрайты и минимизируем все ето
//     (задача через заглушку, без заглушки - в нутри файла )
//-----
lazyRequireTask('2_svg', '/var/www/gulp/task_img/sprite-SVG', {
  src_dev: svg_dev,  // берем из dev
  src_project: svg_project  // сохраняем в project
});
//----------------------------------------------
//  + 4 Копируем и минимизируем изображения
//     (задача через заглушку, без заглушки - в нутри файла )
//-----
lazyRequireTask('img', '/var/www/gulp/task_img/img', {
  src_dev: img_dev,         // откуда берем
  src_project: img_project  // сохраняем картинку
});
//----------------------------------------------
//  + 5 Тупо Копируем Шрифты
//     (задача через заглушку, без заглушки - в нутри файла )
//-----
lazyRequireTask('fonts', '/var/www/gulp/task_fonts', {
  src_dev: fonts_dev,         // откуда берем
  src_project: fonts_project  // сохраняем в проект
});
//----------------------------------------------
//  + 6 Собираем Css из Stylus или SASS
//     (задача через заглушку, без заглушки - в нутри файла )
//-----
lazyRequireTask('css', '/var/www/gulp/task_styl', {
  src_dev: styl_dev,         // откуда берем
  src_project: styl_project  // сохраняем в проект
});
//----------------------------------------------
//  + 7 Собираем JS
//     (задача через заглушку, без заглушки - в нутри файла )
//-----
lazyRequireTask('js', '/var/www/gulp/task_js', {
  src_dev: js_dev,         // откуда берем
  src_project: js_project  // сохраняем в проект
});
//----------------------------------------------
//  - 8 Собираем PHP
//-----
//----------------------------------------------
//  - 9
//-----
//----------------------------------------------
//  - 10
//-----


//----------------------------------------------
//  + Наблюдение за изменениями в файлах
//       (задача без заглушки)
//--------------
gulp.task('watch', function() {

  gulp.watch(html_dev, gulp.series('1_html'));
    //.on('unlink', function(filepath){
    //delete cached.caches.html_dev[path.resolve(filepath)];
  //});
  gulp.watch( s_retina_dev_src, gulp.series('2_sprite','6_css'));
  gulp.watch( svg_dev, gulp.series('3_svg'));
  gulp.watch( img_dev, gulp.series('4_img'));
  gulp.watch( styl_dev_Watch, gulp.series('6_css'));
    //.on('unlink', function(filepath){
    //delete cached.caches.styl_dev_Watch[path.resolve(filepath)];
  //});
  gulp.watch(js_dev, gulp.series('7_js'));
  //  .on('unlink', function(filepath){
  //  delete cached.caches.js_dev[path.resolve(filepath)];
  //});

  livereload.listen();     // Работает через плагин,без РНР и ету строчку в наблюдении
});

