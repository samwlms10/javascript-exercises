const reverseString = function(string) {
let stringLength = string.length;
let reversedWord = '';
    for (i = stringLength - 1; i >= 0; i--){
        reversedWord += string[i];
    }
return reversedWord;
};

reverseString("Hello There");

// Do not edit below this line
module.exports = reverseString;
