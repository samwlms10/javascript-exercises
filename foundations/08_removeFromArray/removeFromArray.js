const removeFromArray = function(arr, ...needsRemoved) {
   return arr.filter(val => !needsRemoved.includes(val)) ;
};


// Do not edit below this line
module.exports = removeFromArray;
