var typescriptbase;
(function (typescriptbase) {
    function sayHello(name) {
        return "Hello from " + name;
    }
    typescriptbase.sayHello = sayHello;
})(typescriptbase || (typescriptbase = {}));
// Tests for greet.ts
/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../tssrc/greet.ts" />
var sayHello = typescriptbase.sayHello;
describe('SayHello', function () {
    beforeEach(function () {
    });
    describe('sayHello', function () {
        it('should return concatinated string', function () {
            console.log(sayHello("TypeScript"));
        });
    });
});
