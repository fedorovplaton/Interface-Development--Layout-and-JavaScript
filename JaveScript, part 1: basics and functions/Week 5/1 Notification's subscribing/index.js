module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if(this.hasOwnProperty(event))
            this[event].push({s:subscriber, h:handler});
        else
            this[event] = [{s:subscriber, h:handler}];
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if(this.hasOwnProperty(event)){
            this[event] = this[event].filter((item)=>{
                return !(subscriber === item.s);
            });
        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if(this.hasOwnProperty(event)) {
            for ($event in this) {
                if ($event == event && $event !== 'on' && $event !== 'off' && $event !== 'emit') {
                    for (let i = 0; i < this[$event].length; i++) {
                        this[$event][i].h.apply(this[$event][i].s);
                    }
                }
            }
        }
        return this;
    }
};
