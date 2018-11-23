"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssetTypes_1 = require("./../../types/AssetTypes");
var MockAsset_1 = require("./characterassetfactory/MockAsset");
/**
 * @class CharacterAssetCreationOptions
 * @description provides creation options to CharacterAssetFactory
 */
var CharacterAssetCreationOptions = /** @class */ (function () {
    function CharacterAssetCreationOptions(type) {
        this._type = type;
    }
    CharacterAssetCreationOptions.prototype.getType = function () {
        return this._type;
    };
    return CharacterAssetCreationOptions;
}());
exports.CharacterAssetCreationOptions = CharacterAssetCreationOptions;
/**
 * @class CharacterAssetFactory
 * @param CharacterAssetCreationOptions
 * Uses the returned type from character creation options to create the appropriate cc.Node derived asset
 *
 */
var CharacterAssetFactory = /** @class */ (function () {
    function CharacterAssetFactory() {
    }
    CharacterAssetFactory.prototype.create = function (options) {
        switch (options.getType()) {
            case AssetTypes_1.CharacterAssetTypes.NPC:
                return new MockAsset_1.MockAsset(AssetTypes_1.CharacterAssetTypes.NPC, {}, 50, MockAsset_1.MockAssetColours.PINK, "NPC");
            case AssetTypes_1.CharacterAssetTypes.NPC_MOCK:
                return new MockAsset_1.MockAsset(AssetTypes_1.CharacterAssetTypes.NPC_MOCK, {}, 50, MockAsset_1.MockAssetColours.PINK, "NPC MOCK");
            case AssetTypes_1.CharacterAssetTypes.PLAYER:
                return new MockAsset_1.MockAsset(AssetTypes_1.CharacterAssetTypes.NPC, {}, 50, MockAsset_1.MockAssetColours.GREEN, "PLAYER");
            case AssetTypes_1.CharacterAssetTypes.PLAYER_MOCK:
                return new MockAsset_1.MockAsset(AssetTypes_1.CharacterAssetTypes.NPC, {}, 50, MockAsset_1.MockAssetColours.GREEN, "PLAYER MOCK");
        }
    };
    return CharacterAssetFactory;
}());
exports.CharacterAssetFactory = CharacterAssetFactory;
