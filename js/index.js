//Callback sencillo
/*console.log(1);
console.log(2);
setTimeout(() => {
    console.log("Callback se ejecutó.");
}, 2000);
console.log(3);
console.log(4);*/

//Con HTTPRequest
const DONE = 4;
const STATUS_OK = 200;
/*const request = new XMLHttpRequest();

//Evento para detectar cambios en request.readyState
request.addEventListener('readystatechange', () => {
    if (request.readyState === DONE) {
        if (request.status === STATUS_OK) {
            console.log(request.responseText);
        } else {
            console.log("Hubo un error.");
        }
    }
});

console.log(1);
console.log(2);
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();
console.log(3);
console.log(4);*/
//console.log(request.readyState);
//console.log(request.responseText);


//Ahora con una función
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    //Evento para detectar cambios en request.readyState
    request.addEventListener('readystatechange', () => {
        if (request.readyState === DONE) {
            if (request.status === STATUS_OK) {
                callback(undefined, JSON.parse(request.responseText));
            } else {
                callback("Ocurrió un error en la consulta.", undefined);
            }
        }
    });

    request.open('GET', resource);
    request.send();     
};

console.log(1);
console.log(2);
getTodos('https://jsonplaceholder.typicode.com/todos/1', (err, data) => {
    console.log('Se ejecutó el callback');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
getTodos('https://jsonplaceholder.typicode.com/todos/2', (err, data) => {
    console.log('Se ejecutó el callback');
    if (err) {
        console.log(err);
    } else {
        console.log("El título es: ", data.title);
    }
});
console.log(3);
console.log(4);