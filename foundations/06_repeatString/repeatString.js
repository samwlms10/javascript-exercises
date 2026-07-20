const repeatString = function(string, count) {
    if (count < 1) {
        return "ERROR";
    }
    let newWord = "";
    for (let i = count; i != 0; i--) {
        newWord += string;
    }
    return newWord
};
console.log(repeatString("HI" , 3))

// Do not edit below this line
module.exports = repeatString;
