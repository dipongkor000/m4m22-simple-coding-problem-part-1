//value changing---
let a = 7;
let b = 3;
console.log(a,b);

const c = a;
a = b;
b = c;
console.log(a,b);

//alternative---
let x = 5;
let y = 'a';
console.log(x,y);

[x,y] = [y,x];
console.log(x,y);