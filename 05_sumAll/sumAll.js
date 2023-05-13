const sumAll = function(num1, num2) {
    if ( num1 < 0  || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    }

    const smallerNumber = Math.min(num1, num2);
    const biggerNumber = Math.max(num1, num2);

    let sum = 0;
    for ( let i = smallerNumber ; i <= biggerNumber ; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
