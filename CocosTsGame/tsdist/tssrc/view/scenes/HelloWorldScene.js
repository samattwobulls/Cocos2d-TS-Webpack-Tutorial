"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorldMainLayer_1 = require("./helloworld/HelloWorldMainLayer");
var HelloWorldScene = /** @class */ (function (_super) {
    __extends(HelloWorldScene, _super);
    function HelloWorldScene() {
        var _this = 
        // 1. super init first
        _super.call(this) || this;
        _super.prototype.ctor.call(_this); //always call this for compatibility with cocos2dx JS Javascript class system
        return _this;
    }
    HelloWorldScene.prototype.onEnter = function () {
        _super.prototype.onEnter.call(this);
        console.log("Hello World Scene");
        this._mainLayer = new HelloWorldMainLayer_1.default();
        this.addChild(this._mainLayer);
    };
    return HelloWorldScene;
}(cc.Scene));
exports.default = HelloWorldScene;
