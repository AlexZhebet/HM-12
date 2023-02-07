let number = +prompt(`Число`, 0) 
 
function locking() { 
    // const number = 0 
    return function (num) { 
        return number = num + number 
    } 
} 
const sum = locking() 
console.log(sum(3)); 
console.log(sum(5)); 
console.log(sum(20));
