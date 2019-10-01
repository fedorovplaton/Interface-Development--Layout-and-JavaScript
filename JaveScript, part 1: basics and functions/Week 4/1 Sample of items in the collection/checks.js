// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./index.js');

// Коллекция данных
var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, [
    { name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com' },
    { name: 'Эмили', gender: 'Женский', email: 'example@example.com' },
    { name: 'Мэт', gender: 'Мужской', email: 'danamcgee@example.com' },
    { name: 'Шерри', gender: 'Женский', email: 'danamcgee@example.com' },
    { name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com' }
]);

console.log(1);

var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.select('name', 'gender'),
    lib.select('gender')
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, [
    { gender: 'Мужской'},
    { gender: 'Женский'},
    { gender: 'Мужской'},
    { gender: 'Мужской'},
    { gender: 'Женский'},
    { gender: 'Женский'},
    { gender: 'Женский'}
]);

console.log(2);

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Банан']),
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, [
    { name: 'Эмили', gender: 'Женский', email: 'example@example.com' },
    { name: 'Мэт', gender: 'Мужской', email: 'danamcgee@example.com' },
]);

console.log(3);
// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Банан']),
    lib.select('name'),
);

console.log(4);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, [
    { name: 'Эмили'},
    { name: 'Мэт'}
]);

console.log(5);

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result,
    friends
);

console.log(6);

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.select('favoriteFruit')
);

console.log(7);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, []);

console.log(8);

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Банан'])
);

console.log(9);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, []);

console.log(10);

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Фейхоа'])
);

console.log(11);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, []);

console.log(12);

var result = lib.query(
    friends,
    lib.select('undefined')
);

console.log(13);

assert.deepEqual(result, friends);

console.info('OK!');
