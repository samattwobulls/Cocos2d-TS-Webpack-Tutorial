var CES;
(function (CES) {
    /**
     * The system is responsible for updating the entities.
     * @class
     */
    var System = /** @class */ (function () {
        function System() {
            this.world = null;
        }
        System.prototype.addedToWorld = function (world) {
            this.world = world;
        };
        System.prototype.removedFromWorld = function () {
            this.world = null;
        };
        /**
         * Update the entities.
         * @public
         * @param {Number} dt time interval between updates
         */
        System.prototype.update = function (dt) {
            throw new Error('Subclassed should override this method');
        };
        return System;
    }());
    CES.System = System;
})(CES || (CES = {}));
