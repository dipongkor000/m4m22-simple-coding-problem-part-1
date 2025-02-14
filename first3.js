// Any year that is evenly divisible by 4 is called a leap year.
// Century years are leap years only if they are divisible by 400.

function LeapYearTest(year){
    if(year % 100 === 0){
        if(year % 400 === 0){
            return true;
        }else{
            return false;
        }
    }
    else if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
//alternative---
function isLeapYear(year){
    if(year % 400 === 0){
        return true;
    }
    else if(year % 100 === 1 && year % 4 ===0){
        return true;
    }
    else{
        return false;
    }
}

console.log(LeapYearTest(1900));
console.log(isLeapYear(2400));