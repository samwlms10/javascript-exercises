const sumAll = function(num1, num2) {
    let addAtIndex = 1
    let lastNum = nums.at(-1);

    for (const num of nums){
        if (num < 0 || num % 1 != 0 || typeof num != "number"){
            return "ERROR";
        }
    }
    if (nums[0] < lastNum){
        for (let i = nums[0] + 1; i < lastNum ; i++){
            nums.splice(addAtIndex, 0, i);
            addAtIndex++
        }
    }
    else{
        for (let i = nums[0] - 1; i > lastNum ; i--){
            nums.splice(addAtIndex, 0, i);
            addAtIndex++
        }
    }
const sum = function(accumulator, element){
    return accumulator + element;
    }
    return nums.reduce(sum);
};
// Do not edit below this line
module.exports = sumAll;
