var CES;
(function (CES) {
    /**
     * The entity node is a wrapper around an entity, to be added into
     * the entity list.
     * @class
     */
    var EntityNode = /** @class */ (function () {
        function EntityNode(entity) {
            this.entity = entity;
            this.next = null;
            this.prev = null;
        }
        return EntityNode;
    }());
    CES.EntityNode = EntityNode;
})(CES || (CES = {}));
