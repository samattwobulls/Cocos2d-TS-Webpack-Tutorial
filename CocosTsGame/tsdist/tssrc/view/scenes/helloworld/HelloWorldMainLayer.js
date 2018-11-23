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
var AssetTypes_1 = require("./../../../types/AssetTypes");
var CharacterAssetFactory_1 = require("../../../factory/view/CharacterAssetFactory");
var HelloWorldMainLayer = /** @class */ (function (_super) {
    __extends(HelloWorldMainLayer, _super);
    function HelloWorldMainLayer() {
        var _this = 
        //////////////////////////////
        // 1. super init first
        _super.call(this) || this;
        _super.prototype.ctor.call(_this); // call the cocos super method in JS  this would be this._super()
        console.log("Hello World Layer");
        _this.assetFactory = new CharacterAssetFactory_1.CharacterAssetFactory();
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        _this.addChild(helloLabel, 5);
        // add "HelloWorld" splash screen"
        _this.sprite = new cc.Sprite(res.HelloWorld_png);
        _this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        _this.addChild(_this.sprite, 0);
        var co = new CharacterAssetFactory_1.CharacterAssetCreationOptions(AssetTypes_1.CharacterAssetTypes.PLAYER);
        var ca = _this.assetFactory.create(co);
        ca.setPosition(10, 20);
        _this.addChild(ca, 0);
        return _this;
    }
    return HelloWorldMainLayer;
}(cc.Layer));
exports.default = HelloWorldMainLayer;
