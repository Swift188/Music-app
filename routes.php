<?php
require_once __DIR__.'/Helpers/Route.php';
require_once __DIR__.'/Helpers/View.php';

// Route::get('index', function() {
//     return view('test.cool');
// });

Route::get('/index', [
    'IndexController', 'index'
])->name('welcome');

Route::get('/songs', [
    'SongController', 'index'
])->name('songs');