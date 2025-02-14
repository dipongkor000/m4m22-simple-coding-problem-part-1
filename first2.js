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
function mileToKilo(mile){
    let kilo = mile * 1.60934;
    return kilo;
}
function kiloToMile(kilo){
    let mile = kilo * 0.621371;
    return mile;
}

console.log(inchToFeet(75));
console.log(inchToFeet2(75));
console.log(mileToKilo(5));
console.log(kiloToMile(20));