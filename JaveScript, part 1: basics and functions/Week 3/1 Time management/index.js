/**
 * @param {String} date
 * @returns {Object}
 */

module.exports = function ($date) {
    return {
        date: new Date($date),
        add: function($value, $type) {
            if($value < 0 || !['years', 'months', 'days', 'hours', 'minutes'].includes($type))
                throw new TypeError();
            switch ($type) {
                case 'years':
                    this.date.setFullYear(this.date.getFullYear() + $value);
                    break;
                case 'months':
                    this.date.setMonth(this.date.getMonth() + $value);
                    break;
                case 'days':
                    this.date.setDate(this.date.getDate() + $value);
                    break;
                case 'hours':
                    this.date.setHours(this.date.getHours() + $value);
                    break;
                case 'minutes':
                    this.date.setMinutes(this.date.getMinutes() + $value);
                    break;
            }
            return this;
        },
        subtract: function ($value, $type) {
            if($value < 0 || !['years', 'months', 'days', 'hours', 'minutes'].includes($type))
                throw new TypeError();
            switch ($type) {
                case 'years':
                    this.date.setFullYear(this.date.getFullYear() - $value);
                    break;
                case 'months':
                    this.date.setMonth(this.date.getMonth() - $value);
                    break;
                case 'days':
                    this.date.setDate(this.date.getDate() - $value);
                    break;
                case 'hours':
                    this.date.setHours(this.date.getHours() - $value);
                    break;
                case 'minutes':
                    this.date.setMinutes(this.date.getMinutes() - $value);
                    break;
            }
            return this;
        },
        get value(){
            let y = this.date.getFullYear();
            let m = (Math.floor((this.date.getMonth() + 1) / 10) > 0)?(this.date.getMonth() + 1):('0' + (this.date.getMonth() + 1));
            let d = (Math.floor(this.date.getDate() / 10) > 0)?(this.date.getDate()):('0' + this.date.getDate());
            let h = (Math.floor(this.date.getHours() / 10) > 0)?(this.date.getHours()):('0' + this.date.getHours());
            let min = (Math.floor(this.date.getMinutes() / 10) > 0)?(this.date.getMinutes()):('0' + this.date.getMinutes());
            return '' + y + '-' + m + '-' + d + " " + h + ":" + min;
        }
    };
};
