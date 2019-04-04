/*Домашнее задание. Promises, async-await, fetch.

## Promise. 

Создайте промис, который зарезолвится или зареджектится с вероятностью 50 на 50.Если зарезоливиться, то первый оработчик then должен 
получить аргумеентом в функцию резолв случайное число от 1 до 10 и вывести алерт, со строокой "Успешно выполнен со значенем {случайное число
     от 1 до 10}". В случае реджекта: Вывести алерт
"Упс, что то пошло не так". Попробовать сделать еще несколкьо примеров своих промисов и поиграться с цепочкой then и catch. Добавить finally.

## Fetch
Сделать get запрос используя fetch на этот эндпоинт: https://jsonplaceholder.typicode.com/todos
В результате отфилтровать масив всех значений по полю completed. Вернуть масив только выполненых тасков. Далее этот масив отсорировать по 
юзер айди. Начинаю от наименьшего к наибольшему. Далее законсолить получившийся результа. 
Вторая часть задания. сделать точно такую же версию, только в коде специально допустить ошибку, чтобы обработчик catch отработал.

## Async-await
Используя fetch сделать все как в задаче с fetch. Только оформить это в стиле async-await.
*/

//## Promise. 
let promise = new Promise(function(resolve, reject){
    const num = Math.random();
    if(num > 0.5){
        let random = Math.ceil(Math.random*10);
        resolve(random);
    } else{
        reject('Ups, something went wrong');
    }
});

promise
    .then(function(res){
        console.log(res);
        const newRes = 'Successfully completed. Your number is' + res;
        return newRes;
    })
    .finally(function(){ console.log('I finiched')});

//## Fetch
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(res){
        var filteredRes = res.filter(function(arr){
            return arr.status == 'resolved'; 
        });
    });