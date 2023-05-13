const removeFromArray = function(array, ...removableValues) {
    let newArray = array.filter(value => {
        return !removableValues.includes(value);
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
