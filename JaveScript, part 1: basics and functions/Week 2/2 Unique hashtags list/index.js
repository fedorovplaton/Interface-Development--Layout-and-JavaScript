/**
 * @param {String[]} hashtags
 * @returns {String}
 */

function uniqueHashtags(acc, item){
    if(!acc.includes(item.toLowerCase())){
        acc.push(item.toLowerCase());
    }
    return acc;
}

module.exports = function (hashtags) {
    return hashtags.reduce(uniqueHashtags, []).join(', ');
};
