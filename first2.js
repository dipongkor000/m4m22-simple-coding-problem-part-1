// 12 inch 1 feet

function inchToFeet(inch){
    let feet = inch / 12;
    return feet;
}
function inchToFeet2(inch){
    let feetFraction = inch / 12;
    let feetMain = parseInt(feetFraction);
    let feetLast = inch % 12;
    let result = feetMain + ' ft ' + feetLast + ' inch ';
    return result;
}

console.log(inchToFeet(75));
console.log(inchToFeet2(75));