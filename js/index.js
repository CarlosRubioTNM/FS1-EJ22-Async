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
/*getTodos('https://jsonplaceholder.typicode.com/todos/1s', (err, data) => {
    console.log('Se ejecutó el callback');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});*/
/*getTodos('https://jsonplaceholder.typicode.com/todos/2', (err, data) => {
    console.log('Se ejecutó el callback');
    if (err) {
        console.log(err);
    } else {
        console.log("El título es: ", data.title);
    }
});*/

//Callback hell
/*getTodos('list/fulano.json', (err, data) => {
    console.log(data);
    getTodos('list/perengano.json', (err,data) => {
        console.log(data);
        getTodos('list/zutano.json', (err,data) => {
            console.log(data);
        });
    });
});*/
console.log(3);
console.log(4);

//Promises
//Ejemplo
const getSomething = () => {
    return new Promise((resolve, reject) => {//Resolve y reject vienen del API
        //Proceso tardado
        resolve('Datos regresados');
        //reject('Error');
    });
};

//Se puede hacer así, pero es algo confuso
/*getSomething().then(data => {
    console.log("OK", data);
}, err => {
    console.log("Not OK", err);
});*/

//Se ve un poco mejor
/*getSomething().then(data => {
    console.log("OK", data);
}).catch(err => {
    console.log("Not OK", err);
});*/


//Función para obtener posts con Promises
const getPosts = (resource, callback) => {
    return new Promise((resolve,reject) => {
        const request = new XMLHttpRequest();

        //Evento para detectar cambios en request.readyState
        request.addEventListener('readystatechange', () => {
            if (request.readyState === DONE) {
                if (request.status === STATUS_OK) {
                    resolve(JSON.parse(request.responseText));
                } else {
                    reject("Ocurrió un error en la consulta.");
                }
            }
        });

        request.open('GET', resource);
        request.send();    
    });
};


/*getPosts('list/fulano.json').then(data => {
    console.log("Promesa 1 terminada: ", data);
    return getPosts('list/zutano.json');
}).then(data => {
    console.log("Promesa 2 terminada: ", data);
    return getPosts('list/perengano.json');
}).then(data => {
    console.log("Promesa 3 terminada", data);
}).catch(err => {
    console.log(err);
});*/

//Usando fetch (un método más nuevo)
fetch('list/fulano.json').then(response => {
    //console.log('Fetch terminado', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log("Error", err);
});

console.log(3);
console.log(4);
console.log(3);
console.log(4);
console.log(3);
console.log(4);
console.log(3);
console.log(4);
console.log(3);
console.log(4);
console.log(3);
console.log(4);
console.log(3);
console.log(4);
