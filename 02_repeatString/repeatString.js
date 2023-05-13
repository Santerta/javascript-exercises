const repeatString = function(string, num) {
    let returnString = "";
    if (num < 0) {
        returnString = "ERROR"
        return returnString;
    }
    for ( let i = 0 ; i < num ; i++){
        returnString = returnString.concat(string);
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
