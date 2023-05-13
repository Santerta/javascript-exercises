const reverseString = function(string) {
    let stringReversed = "";
    const index = string.length-1;
    for (let i = index ; i >= 0 ; i--){
        stringReversed += string[i];
    }

    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
