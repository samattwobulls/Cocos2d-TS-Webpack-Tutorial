var CES;
(function (CES) {
    /**
     * The family is a collection of entities having all the specified components.
     * @class
     */
    var Family = /** @class */ (function () {
        /**
         * @constructor
         * @param {Array} componentNames
         */
        function Family(componentNames) {
            /**
             * @private
             */
            this.componentNames = componentNames;
            /**
             * A linked list holding the entities;
             * @private
             */
            this.entities = new CES.EntityList();
            /**
             * @public
             * @readonly
             */
            this.entityAdded = new CES.Signal();
            /**
             * @public
             * @readonly
             */
            this.entityRemoved = new CES.Signal();
        }
        /**
         * Get the entities of this family.
         * @public
         * @return {Array}
         */
        Family.prototype.getEntities = function () {
            return this.entities.toArray();
        };
        /**
         * Add the entity into the family if match.
         * @public
         * @param {Entity} entity
         */
        Family.prototype.addEntityIfMatch = function (entity) {
            if (!this.entities.has(entity) && this.matchEntity(entity)) {
                this.entities.add(entity);
                this.entityAdded.emit(entity);
            }
        };
        /**
         * Remove the entity into the family if match.
         * @public
         * @function
         * @param {Entity} entity
         */
        Family.prototype.removeEntity = function (entity) {
            if (this.entities.has(entity)) {
                this.entities.remove(entity);
                this.entityRemoved.emit(entity);
            }
        };
        /**
         * Handler to be called when a component is added to an entity.
         * @public
         * @param {Entity} entity
         * @param {String} componentName
         */
        Family.prototype.onComponentAdded = function (entity, componentName) {
            this.addEntityIfMatch(entity);
        };
        /**
         * Handler to be called when a component is removed from an entity.
         * @public
         * @param {Entity} entity
         * @param {String} componentName
         * @param {Component} removedComponent
         */
        Family.prototype.onComponentRemoved = function (entity, componentName, removedComponent) {
            // return if the entity is not in this family
            if (!this.entities.has(entity)) {
                return;
            }
            // remove the node if the removed component is required by this family
            for (var i = 0; i < this.componentNames.length; ++i) {
                if (this.componentNames[i] === componentName) {
                    this.entities.remove(entity);
                    this.entityRemoved.emit(entity, removedComponent);
                }
            }
        };
        /**
         * Check if an entity belongs to this family.
         * @private
         * @param {Entity} entity
         * @return {Boolean}
         */
        Family.prototype.matchEntity = function (entity) {
            for (var i = 0; i < this.componentNames.length; i++) {
                if (!entity.hasComponent(this.componentNames[i])) {
                    return false;
                }
            }
            return true;
        };
        return Family;
    }());
    CES.Family = Family;
})(CES || (CES = {}));
