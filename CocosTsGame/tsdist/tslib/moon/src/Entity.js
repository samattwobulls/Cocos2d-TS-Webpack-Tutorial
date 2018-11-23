var CES;
(function (CES) {
    /**
     * The entity is the container of components.
     * @class
     */
    var Entity = /** @class */ (function () {
        function Entity() {
            /**
             * @public
             * @readonly
             */
            this.id = Entity._id++;
            /**
             * Map from component names to components.
             * @private
             * @property
             */
            this.components = {};
            /**
             * @public
             * @readonly
             */
            this.onComponentAdded = new CES.Signal();
            /**
             * @public
             * @readonly
             */
            this.onComponentRemoved = new CES.Signal();
        }
        /**
         * Check if this entity has a component by name.
         * @public
         * @param {String} componentName
         * @return {Boolean}
         */
        Entity.prototype.hasComponent = function (componentName) {
            return this.components['$' + componentName] !== undefined;
        };
        /**
         * Get a component of this entity by name.
         * @public
         * @param {String} componentName
         * @return {Component}
         */
        Entity.prototype.getComponent = function (componentName) {
            return this.components['$' + componentName];
        };
        /**
         * Add a component to this entity.
         * @public
         * @param {Component} component
         */
        Entity.prototype.addComponent = function (component) {
            this.components['$' + component.name] = component;
            this.onComponentAdded.emit(this, component.name);
        };
        /**
         * Remove a component from this entity by name.
         * @public
         * @param {String} componentName
         */
        Entity.prototype.removeComponent = function (componentName) {
            var removedComponent = this.components['$' + componentName];
            this.components['$' + componentName] = undefined;
            this.onComponentRemoved.emit(this, componentName, removedComponent);
        };
        Entity._id = 0;
        return Entity;
    }());
    CES.Entity = Entity;
})(CES || (CES = {}));
