//Exercise 1 Temperature checks

let temperature = 40;

if (temperature < 0){
  console.log("it's freezing!");
}else if (temperature >= 0 && temperature <= 15){
  console.log("it's cold");
}else if (temperature >= 16 && temperature <= 25){
  console.log("it's mild");
}else{
  console.log("it's warm");
}

//Switch statements

let Temperature = 10;

switch (true){
  case Temperature < 0:
    console.log("it's freezing!");
    break;
  case Temperature >= 0 && Temperature <= 15:
    console.log("it's cold");
    break;
  case Temperature >= 16 && Temperature <= 25:
    console.log("it's mild");
    break;
  default:
    console.log("it's warm");
}

//Exercise 2 divisibility check

let number =12;

if (number % 2 === 0 && number % 3 ===0){
  console.log("Divisible by both");
}else if(number % 2 === 0){
  console.log("Divisible by 2");
}else if(number % 3 === 0){
  console.log("Divisible by 3");
}else{
  console.log("Not Divisible by 2 0r 3");
}


//Uisng switch statement

let Number = 12;
 switch(true){
  case Number % 2 === 0 && Number % 3 === 0:
    console.log("Divisible by both");
    break;
  case Number % 2 === 0:
    console.log("Divisible by 2");
    break;
  case Number % 3 === 0:
    console.log("Divisible by 3");
    break;
  default:
    console.log("Not Divisible by 2 or 3"); 
 }


//exercise 3 for loops

for (let a = 1; a <= 10; a++){
  console.log(a);
}

for (let b = 2; b <= 20; b += 2){
  console.log(b)
}

let SUM = 0;
for (let c = 0; c <= 100; c++){
  SUM += c
}
console.log(SUM);

const numbers = [1, 2, 3, 4, 5];
for (let d = 0; d < numbers.length; d++){
  console.log(numbers [d]);
}

const numberS = [3, 7, 2, 5, 10, 6];
let max = numberS[0];
for (let e = 1; e < numbers.length; e++){
if(numberS[e]> max){
  max= numberS[e];
 }
}
console.log(max);

//Exercise 4 While loops

let h = 1;
while (h <= 10){
  console.log(h);
   h++;
}

let f = 1;
while (f <= 20){
  if(f % 2 === 0){
  console.log(f);
  }
  f++;
}

let Sum = 0;
let g = 1;
while (g <= 100){
  Sum += g;
  g++;
}
console.log(Sum);

let j = 5;
while (j < 50){
  console.log(j);
  j += 5;
}


//Exercise 5 Do while loops

let i = 1;
do {
  console.log(i);
  i++
} while (i <= 10);


let SuM = 0;
let l = 1;
do {
  SuM += l;
  l++;
}while (l <= 100);
console.log(SuM);


let nuM ;
do {
  nuM =prompt("Enter a number greater than 10:")
}while (nuM <= 10);
console.log("You got it")


 CorrectNumber = 5;
let guess;
do {
  guess = prompt("Enter a number between 1 and 10:");
}while (guess != CorrectNumber);
console.log("You guessed it!");





