/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    let min = hours * 60 + minutes + interval;

    let h = Math.floor(min / 60) % 24;
    let m = min % 60;

    let ans = '';

    if(h < 10)
        ans += '0' + h + ':';
    else
        ans += h + ':';

    if(m < 10)
        ans += '0' + m;
    else
        ans += m;

    return ans;
};
