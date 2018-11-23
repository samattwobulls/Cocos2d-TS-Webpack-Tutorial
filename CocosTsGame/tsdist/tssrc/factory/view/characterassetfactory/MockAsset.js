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
/**
 * @description emum providing identifiable colour options for MockAsset
 */
var MockAssetColours;
(function (MockAssetColours) {
    MockAssetColours[MockAssetColours["RED"] = 0] = "RED";
    MockAssetColours[MockAssetColours["BLUE"] = 1] = "BLUE";
    MockAssetColours[MockAssetColours["YELLOW"] = 2] = "YELLOW";
    MockAssetColours[MockAssetColours["GREEN"] = 3] = "GREEN";
    MockAssetColours[MockAssetColours["PINK"] = 4] = "PINK";
    MockAssetColours[MockAssetColours["NONE"] = 5] = "NONE";
})(MockAssetColours = exports.MockAssetColours || (exports.MockAssetColours = {}));
;
/**
 * @class MockAsset
 * @description a cc.Node derived class for creating mock assets ,creates a circle with given radius, containing a label with optionalgiven text
 * Templater option T is for the Type used to describe type generally string | int | enumtype
 *
 */
var MockAsset = /** @class */ (function (_super) {
    __extends(MockAsset, _super);
    function MockAsset(type, config, radius, COLOUR, text) {
        if (radius === void 0) { radius = 20; }
        if (COLOUR === void 0) { COLOUR = MockAssetColours.BLUE; }
        if (text === void 0) { text = "Text"; }
        var _this = _super.call(this) || this;
        _this._visibleNode = null;
        _this._objecttype = null;
        _this.ctor();
        _this._objecttype = type;
        _this.setContentSize(radius * 2, radius * 2);
        _this.setAnchorPoint(0.5, 0.5);
        _this._circleNode = new cc.DrawNode();
        _this._circleNode.drawCircle(cc.p(radius, radius), radius, 0, 1, true, 8, _this.getColour(COLOUR));
        _this.addChild(_this._circleNode);
        var textF = new ccui.Text();
        textF.boundingWidth = radius * 2;
        textF.boundingHeight = 30;
        textF.attr({
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            string: text,
            font: "20px Ariel",
            x: radius
        });
        textF.y = radius - textF.height / 8;
        _this.addChild(textF);
        return _this;
    }
    MockAsset.prototype.getColour = function (colour) {
        switch (colour) {
            case MockAssetColours.RED:
                return new cc.Color(187, 56, 10, 255);
            case MockAssetColours.GREEN:
                return new cc.Color(12, 123, 2, 255);
            case MockAssetColours.BLUE:
                return new cc.Color(27, 68, 174, 255);
            case MockAssetColours.PINK:
                return new cc.Color(211, 62, 109, 255);
            case MockAssetColours.YELLOW:
                return new cc.Color(242, 171, 52, 255);
            case MockAssetColours.NONE:
                return new cc.Color(255, 255, 255, 255);
        }
    };
    return MockAsset;
}(cc.Node));
exports.MockAsset = MockAsset;
