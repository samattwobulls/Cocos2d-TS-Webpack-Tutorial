"use strict";
/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/modules/chai/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Application1_1 = require("../tssrc/Application1");
describe('Application', function () {
    beforeEach(function () {
        console.log("before");
    });
    describe('Application1', function () {
        it('should be non null', function () {
            var app = new Application1_1.default();
            chai_1.expect(app).to.not.be.null;
        });
    });
});
