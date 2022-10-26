// Arm strong number
let arm = 371;
let count = 0;
let arm2 = arm;
let sum = 0;
while(arm>0){
    count++;
    arm = parseInt(arm / 10);
}

while(arm2>0){
    let a = arm2 % 10;
    sum = a ** count + sum;
    arm2 = parseInt(arm2/10);
}
console.log(sum);

//strong number

let strong = 145;
let strong2 = strong;
let sum2 = 1;
let sum3 = 0;
while(strong > 0){
    let a = strong % 10;
    while(a>0){
        sum2 = a * sum2;
        a = a - 1;
        
    }
    sum3 = sum2 + sum3;
    sum2 = 1;
    
    strong = parseInt(strong / 10);
}
console.log(sum3);

//write a program in reverse

let num = Number(prompt("Enter number to reverse "));
let reverse = 0;

while(num>0){
    let lastDigit = num % 10;
    reverse = reverse * 10;
    reverse = reverse + lastDigit;
    num = parseInt(num/10);
}
console.log(reverse);
