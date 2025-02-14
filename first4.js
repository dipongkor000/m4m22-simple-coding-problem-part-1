/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array 
 */

function oddAverage(numbers){
    let sum = 0;
    let div = [];
   for(let s of numbers){
    if(s % 2 === 1){
        div.push(s);
        sum = sum + s;
    }
   }
   return sum / div.length;
}
//alternative--
function evenAverage(numbers){
    let div = [];
    for(let d of numbers){
        if(d % 2 === 0){
            div.push(d);
        }
    }
    
    let sum = 0;
    for(let s of div){
        sum = sum + s;
    }

    return sum / div.length
}

console.log(oddAverage([42,13,58,65,81,96,7,5]));
console.log(evenAverage([42,13,58,65,81,96,7,5]));