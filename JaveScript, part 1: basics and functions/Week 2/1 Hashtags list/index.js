/**
 * @param {String} tweet
 * @returns {String[]}
 */

function getHashtag(acc, item){
    if(item[0] == '#' && item.length > 1){
        acc.push(item.slice(1, item.length));
    }
    return acc;
}

module.exports = function (tweet) {
    return tweet.split(" ").reduce(getHashtag, []);
};
