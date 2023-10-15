 
let age = 17;

if (age >= 18) 
{
   console.log("Your are Allow");    
}
else{
    console.log("Your are not allow");
}

let signal = "red"

if (signal == "red")
{
    console.log("Red => Stop");
    
}
else if(signal == "yellow")
{
    console.log("Yellow => Go slow");
}
else{
    console.log("Grenn => Go Fast");
}

let user = "Admin"

switch (user) {
    case "Admin":
        console.log("He is admin");
        break;

    case "Employe":
        console.log("He is student");
        break;

    case "Mentor":
        console.log("He is mentor");
        break;    


    default:
        console.log("none")    
}
  
for (let i = 10; i <= 20; i++) {
   console.log(i);
    
}
let io = 0
while (io< 10 )
{
    
    console.log(io);
    io++ 
}
let i = 0
do {
   console.log("l");
   i++ 
} while (i<10);


// ? TRUE:False


 isloggedin = false
isloggedin ? console.log("Home page"):console.log("Loginpaghe");

age = 18
console.log(age);

let Grenn
Grenn ={}
console.log(Grenn);

console.log(typeof typeof 1);


const num =[1,2,3]
num[10]= 11
console.log(num);

console.log( 3+4 +"5");

console.log("abcd"[0])

// const name = "pew"
// console.log(name());

const o = false || {} || null
const t =null || false || ""
const th = [] || 0 || true
console.log(o,t,th);


for(let i =1 ;i<5 ; i++)
{
    if( i===3)
    console.log(i);
}

console.log(8/0);


const name = "pe"

console.log(typeof name == "object");
console.log(typeof name == "string");


let a =[1,2,3,4]
for(let i in a){
    if(a[i] % 2 ===0){
        console.log(a[i])
    }
}

let x =20
let y =x > 10 ? x < 30 : "not"
console.log(y);

// let l = 5
// while (l<6)
//  {
//      console.log(x)
// }


const sum = eval("10+10")
console.log(sum);


{ name: "ok" , 
  name1: "no" }

let p =34;
console.log(typeof p);


let arr = [1,2,3]
console.log(typeof arr);

let vae = {name : "pw skill"}
console.log(typeof vae);


let Name = "pw skill"
console.log(Name);

let iamhappy = true
console.log(iamhappy);

let 1ame = "pw skill"
// let var =13

let numb = 6
console.log(`${numb} * 1 = ${numb *1}`);
console.log(`${numb} * 2 = ${numb *2}`);
console.log({numb } *1 === {numb} *1);

let num1=10
let num2 =8

console.log(`this is add ${num1 + num2 }`);


let l =10 
let w = 20

let perimeter = 2 * (l +w)
console.log(`this is l:${l} and w:${w} is${perimeter}` );

let light = "red"

if (light==red) 
{
    console.log("Stop");
} 
else if(light==green) 
{
     console.log("Go Fast");
}
else if (light==yellow){
      console.log("Go Slow");
}

let num1 = 50
let num2 = 27

if (num1 > num2) 
{
    console.log("num1 is > num2");
}
else{
    console.log("num2 > num1");
}

let numm =  3

if (numm % 5==0 && numm % 3==0) 
{
    console.log("FizzBuzz")
}
else if(numm % 3==0){
    console.log("Fizz");
}
else if(numm % 5 ==0)
{
    console.log("Buzz");
}
else{
    console.log("invalid input");
}

const d ="Monday"

let daysUntilWeekend


switch (d) {
    case "Monday":
        console.log(`there are day12(s) util the weekend`);
        break;
    case Tuesday:

    default:
        break;
}

const m =1
for(m=1 ; m<7 ;m++)
{
switch (m) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("freb");
        break

    case 3:
        console.log("mar");    
         break
    
    case 4:
        console.log("april");  
        break

    case 5:
        console.log("may");
        break
    
    case 6:
        console.log("june");
        break    
    default:
        console.log("invalid input");
 
        break;
    }
}


let number = -1;
number ==0 ? console.log("This is zero") 
: number > 0 ? console.log("This is big") 
: console.log("This is smaller");\

let num1 = 90
let num2 = 90

num1 == num2 ? console.log("Both are same") : num1 > num2 ? console.log(`The Bigger num Of the numbers ${num1}`) : console.log(`The smaller num of the numbers ${num2}`);


let num1 = 3

for(let i =1 ; i<10 ; i++)
{
    console.log(`${num1} * ${i} = ${num1 * i}`);
}

let num1 = 100

for(let i = 1 ;i<=num1 ; i++)
{
    if (i%2!==0)
     {
       console.log(i);    
    }
}