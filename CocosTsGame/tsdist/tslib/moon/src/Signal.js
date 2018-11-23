var CES;
(function (CES) {
    /**
     * The signal can register listeners and invoke the listeners with messages.
     * @class
     */
    var Signal = /** @class */ (function () {
        function Signal() {
            this.listeners = [];
        }
        /**
         * Add a listener to this signal.
         * @public
         * @param {Function} listener
         */
        Signal.prototype.add = function (listener) {
            this.listeners.push(listener);
        };
        /**
         * Remove a listener from this signal.
         * @public
         * @param {Function} listener
         */
        Signal.prototype.remove = function (listener) {
            for (var i = 0; i < this.listeners.length; i++) {
                if (listener === this.listeners[i]) {
                    this.listeners.splice(i, 1);
                    return true;
                }
            }
            return false;
        };
        /**
         * Emit a message.
         * @public
         * @param {...*} messages
         */
        Signal.prototype.emit = function () {
            var messages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                messages[_i] = arguments[_i];
            }
            for (var _a = 0, _b = this.listeners; _a < _b.length; _a++) {
                var listener = _b[_a];
                listener.apply(null, messages);
            }
        };
        return Signal;
    }());
    CES.Signal = Signal;
})(CES || (CES = {}));
