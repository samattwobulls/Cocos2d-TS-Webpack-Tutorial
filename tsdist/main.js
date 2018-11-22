var typescriptbase;
(function (typescriptbase) {
    function sayHello(name) {
        return "Hello from " + name;
    }
    typescriptbase.sayHello = sayHello;
})(typescriptbase || (typescriptbase = {}));
/// <reference path="./greet.ts" />
var typescriptbase;
(function (typescriptbase) {
    var sayHello = typescriptbase.sayHello;
    console.log(sayHello("TypeScript"));
})(typescriptbase || (typescriptbase = {}));
