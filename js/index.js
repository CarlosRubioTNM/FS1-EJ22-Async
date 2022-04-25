//Callback sencillo
/*console.log(1);
console.log(2);
setTimeout(() => {
    console.log("Callback se ejecutó.");
}, 2000);
console.log(3);
console.log(4);*/

//Con HTTPRequest
const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();
console.log(request.responseText);