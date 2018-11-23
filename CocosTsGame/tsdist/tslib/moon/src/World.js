var CES;
(function (CES) {
    /**
     * The world is the container of all the entities and systems.
     * @class
     */
    var World = /** @class */ (function () {
        function World() {
            /**
             * A map from familyId to family
             * @private
             */
            this.families = {};
            /**
             * @private
             */
            this.systems = [];
            /**
             * @private
             */
            this.entities = new CES.EntityList();
            // this.systemEventBusSignal = new signals.Signal;
        }
        World.prototype.dispatchWorldEvent = function (eventName, eventData) {
            //      this.systemEventBusSignal.dispatch(eventName, eventData);
        };
        /**
         * Add a system to this world.
         * @public
         * @param {System} system
         */
        World.prototype.addSystem = function (system) {
            this.systems.push(system);
            system.addedToWorld(this);
            return this;
        };
        /**
         * Remove a system from this world.
         * @public
         * @param {System} system
         */
        World.prototype.removeSystem = function (system) {
            for (var i = 0; i < this.systems.length; i++) {
                if (this.systems[i] === system) {
                    this.systems.splice(i, 1);
                    system.removedFromWorld();
                }
            }
        };
        /**
         * Add an entity to this world.
         * @public
         * @param {Entity} entity
         */
        World.prototype.addEntity = function (entity) {
            var _this = this;
            // try to add the entity into each family
            for (var familyId in this.families) {
                if (this.families.hasOwnProperty(familyId)) {
                    this.families[familyId].addEntityIfMatch(entity);
                }
            }
            // update the entity-family relationship whenever components are
            // added to or removed from the entities
            entity.onComponentAdded.add(function (entity, componentName) {
                _this.onComponentAdded(entity, componentName);
            });
            entity.onComponentRemoved.add(function (entity, componentName, component) {
                _this.onComponentRemoved(entity, componentName, component);
            });
            this.entities.add(entity);
        };
        /**
        * gets and entity by id
        * @public
        * @param {entityId} entity
        * @return {CES.Entity}
        */
        World.prototype.get = function (entityId) {
            return this.entities.get(entityId);
        };
        /**
         * Remove and entity from this world.
         * @public
         * @param {Entity} entity
         */
        World.prototype.removeEntity = function (entity) {
            // try to remove the entity from each family
            for (var familyId in this.families) {
                if (this.families.hasOwnProperty(familyId)) {
                    this.families[familyId].removeEntity(entity);
                }
            }
            this.entities.remove(entity);
        };
        /**
         * Get the entities having all the specified componets.
         * @public
         * @param {...String} componentNames
         * @return {Array} an array of entities.
         */
        World.prototype.getEntities = function () {
            var componentNames = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                componentNames[_i] = arguments[_i];
            }
            var familyId = CES.World.getFamilyId(componentNames);
            this.ensureFamilyExists(componentNames);
            return this.families[familyId].getEntities();
        };
        /**
         * For each system in the world, call its `update` method.
         * @public
         * @param {Number} dt time interval between updates.
         */
        World.prototype.update = function (dt) {
            for (var _i = 0, _a = this.systems; _i < _a.length; _i++) {
                var system = _a[_i];
                system.update(dt);
            }
        };
        /**
         * Returns the signal for entities added with the specified components. The
         * signal is also emitted when a component is added to an entity causing it
         * match the specified component names.
         * @public
         * @param {...String} componentNames
         * @return {Signal} A signal which is emitted every time an entity with
         *     specified components is added.
         */
        World.prototype.entityAdded = function () {
            var componentNames = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                componentNames[_i] = arguments[_i];
            }
            var familyId = CES.World.getFamilyId(componentNames);
            this.ensureFamilyExists(componentNames);
            return this.families[familyId].entityAdded;
        };
        /**
         * Returns the signal for entities removed with the specified components.
         * The signal is also emitted when a component is removed from an entity
         * causing it to no longer match the specified component names.
         * @public
         * @param {...String} componentNames
         * @return {Signal} A signal which is emitted every time an entity with
         *     specified components is removed.
         */
        World.prototype.entityRemoved = function () {
            var componentNames = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                componentNames[_i] = arguments[_i];
            }
            var familyId = CES.World.getFamilyId(componentNames);
            this.ensureFamilyExists(componentNames);
            return this.families[familyId].entityRemoved;
        };
        /**
         * Creates a family for the passed array of component names if it does not
         * exist already.
         * @param {Array.<String>} components
         */
        World.prototype.ensureFamilyExists = function (components) {
            var families = this.families;
            var familyId = CES.World.getFamilyId(components);
            if (!families[familyId]) {
                families[familyId] = new CES.Family(Array.prototype.slice.call(components));
                for (var node = this.entities.head; node; node = node.next) {
                    families[familyId].addEntityIfMatch(node.entity);
                }
            }
        };
        /**
         * Returns the family ID for the passed array of component names. A family
         * ID is a comma separated string of all component names with a '$'
         * prepended.
         * @param {Array.<String>} components
         * @return {String} The family ID for the passed array of components.
         */
        World.getFamilyId = function (components) {
            return '$' + Array.prototype.join.call(components, ',');
        };
        /**
         * Handler to be called when a component is added to an entity.
         * @private
         * @param {Entity} entity
         * @param {String} componentName
         */
        World.prototype.onComponentAdded = function (entity, componentName) {
            for (var familyId in this.families) {
                if (this.families.hasOwnProperty(familyId)) {
                    this.families[familyId].onComponentAdded(entity, componentName);
                }
            }
        };
        /**
         * Handler to be called when component is removed from an entity.
         * @private
         * @param {Entity} entity
         * @param {String} componentName
         * @param {Component} component
         */
        World.prototype.onComponentRemoved = function (entity, componentName, component) {
            for (var familyId in this.families) {
                if (this.families.hasOwnProperty(familyId)) {
                    this.families[familyId].onComponentRemoved(entity, componentName, component);
                }
            }
        };
        return World;
    }());
    CES.World = World;
})(CES || (CES = {}));
