console.log("i'm loading")

function testMe() {
    let test1 = 5;
    let test2 = 6;
    let test3 = 7;
    let result = test1*test2*test3;
    return result;
}

function AI(x) {
    if (x == 'hello') {
        return 'hi';
    }
    else {
        return 'I cannot understand';
    }
}

function tripleSum(x, y, z) {
    let a = x * y* z;
    return a;
}

function factorial(n)
{ 
  let i,f 
  f=1
  for(i=n;i>1;i--)
  {
     f=f*i
  }
  return(f)
}

function calculator(number1, number2, sign) {
  if (sign == '+') {return number1 + number2;}
  if (sign == '-') {return number1 - number2;}
  if (sign == '*') {return number1 * number2;}
  if (sign == '/') {return number1 / number2;}
}

function absolute (n) {
      return Math.abs(n);
}

function fizzBuzz (x){
if (x % 21 == 0) {
    return 'fizzbuzz';
  }
  else if (x % 7 == 0) {
    return 'buzz';
  }
  else if (x % 3 == 0)  {
    return 'fizz';
  }else{
    return x;
  }
}

function positive (x) {
    if (x > 0) {
    return true;
}
else {
    return false;
}
}

function transform (number) {
  if (number == 0) {
    return 'zero';
  }
  else if (number == 1) {
    return 'one';
  }
  else if (number == 2)  {
    return 'two';
  }
  else if (number == 3) {
    return 'three';
  }
  else if (number == 4)  {
    return 'four';
  }
  else if (number == 5) {
    return 'five';
  }
  else if (number == 6)  {
    return 'six';
  }
  else if (number == 7) {
    return 'seven';
  }
  else if (number == 8)  {
    return 'eight';
  }
  else if (number == 9)  {
    return 'nine';
  }else{
    return 'choose a number from 0 to 9';
  }
}

function sum(a){
  let sum = 0;
  for(let i = 0; i < a.length; i++) {
    if(Number(x[i]))
      sum += x[i];
  }
  return sum;
}

function min (a){
  let min = Number.MAX_VALUE

  for(let i = 0; i < a.length; i++)
    if (a[i] < min)

  min = a[i]
  for(let i = 1; i < a.length; i++)
  if(a[i] < min)
      min - a[i]

  return min;
}

function arrayFi(obj) {
    let result = []
    for(let prop in obj) {
      result.push({
        name: prop,
        value: onj[prop]
    })
  }

    return result;
}

function objetcyFi (array) {
  let result = {}
  
  for(let i = 0; i < array.length; i ++) {
      result[array[i].name] = array[i].value
  }

    return result;
}

function revertArray (array) {
    for (let i = 0; i < array.length / 2; i ++){
        let temp = array[i]
        array[i]= array [array.length-i -1]
        array[array.length-i - 1] = temp
    }
}

function swappy (array, pos1, pos2){
  let temp = array[pos1]
  array[pos1] = array[pos2]
  array[pos2] = temp
}