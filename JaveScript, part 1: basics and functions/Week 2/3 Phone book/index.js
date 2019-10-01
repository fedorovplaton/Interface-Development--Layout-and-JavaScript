// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

function ADD(command){
    [$command, $name, $Phones] = command.split(" ");
    $phones = $Phones.split(',');
    if(!phoneBook.hasOwnProperty($name)){
        phoneBook[$name] = $phones;
        return;
    }
    else{
        for(let i = 0; i < $phones.length; i++){
            if(!phoneBook[$name].includes($phones[i]))
                phoneBook[$name].push($phones[i]);
        }
    }
}

function SHOW(){
    let showArray = [];

    for($name in phoneBook){
        if(phoneBook[$name].length != 0){
            showArray.push('' + $name + ': ' + phoneBook[$name].join(', '));
        }
    }

    return showArray.sort();
}

function REMOVE(command){
    [$command, $removePhone] = command.split(" ");

    for($name in phoneBook){
        let index = phoneBook[$name].indexOf($removePhone);
        if(index != -1){
            phoneBook[$name].splice(index, 1);
            return true;
        }
    }
    return false;
}

module.exports = function (command) {
    if(command[0] == 'A') {
        return ADD(command);
    } else if(command[0] == 'R'){
        return REMOVE(command);
    } else if(command[0] == 'S'){
        return SHOW();
    }


};
