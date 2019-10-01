/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

function queryParsing(acc, item) {
    if(item[0] == 'select') {

        let sels = item[1].filter(($item)=>{return !(acc.rightFields.indexOf($item) == -1)});
        //console.log(sels.join(' '));
        if(sels.length === 0)
            return acc;

        if(acc.selects.length !== 0) {
            for (let i = 0; i < acc.selects.length; i++) {
                if((sels.indexOf(acc.selects[i])) === -1){
                    acc.selects.splice(i, 1);
                    i--;
                }
            }
        }
        else{
            acc.selects = sels;
        }
    }
    else {
        let fils = item[2];
        if(acc.filters.hasOwnProperty(item[1])){
            for(let i = 0; i < acc.filters[item[1]].length; i++){
                if((fils.indexOf(acc.filters[item[1]][i])) === -1) {
                    acc.filters[item[1]].splice(i, 1);
                    i--;
                }
            }
        }
        else{
            acc.filters[item[1]] = fils;
        }
    }
    return acc;
}

function query(collection) {
    let collectionArray = [].slice.call(arguments);
    let friends = collectionArray[0];

    let $rightFields = [];        //
    for(field in friends[0]){     //
        $rightFields.push(field); // Создаём массив доступных для Select полей
    }

    //console.log($rightFields.join(" "));

    let commands = collectionArray.slice(1).reduce(queryParsing, {selects:$rightFields, filters:{}, rightFields:$rightFields.slice()});

    if(collectionArray.length === 1)
        return friends;
    let libReturn = [];
    //console.log(commands);
    if(commands.selects.length === 0)
        return [];
    for(let i = 0; i < friends.length; i++){
        let badOne = false;
        for(prop in commands.filters){
            //console.log(commands.filters[prop] + ' ' + typeof commands.filters[prop] + ' should includes: ' + friends[i][prop] + ' ' + typeof friends[i][prop]);
            if(commands.filters[prop].indexOf(friends[i][prop]) === -1) {
                badOne = true;
                break;
            }
        }
        if(badOne) continue;

        let friendReturn = {};
        for(propName in friends[i]){
            if(commands.selects.indexOf(propName) !== -1)
                friendReturn[propName] = friends[i][propName];
        }
        libReturn.push(friendReturn);
    }
    return libReturn;
}

/**
 * @params {String[]}
 */
function select() {
    return ['select', [].slice.call(arguments)]; // ['select', [name1, name2, name3];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filterIn', property, values];//[].slice.call(arguments).slice(1)]; // ['filterIn', 'propertyName', [name1, name2, name3];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
