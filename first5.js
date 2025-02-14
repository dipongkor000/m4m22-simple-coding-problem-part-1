/**
 * array has some duplicate elements
 */


function nameNoRepeat(arrayName){
    let div = [];
    for(const item of arrayName){
        if(div.includes(item) === false){
            div.push(item);
        }
    }
    return div;
}

const nameMill = ['sakil','nahid','rana','rahim','sakil','sakib','rana'];
const numbers = [25,32,78,43,32,12,78,12];
console.log(nameNoRepeat(numbers));