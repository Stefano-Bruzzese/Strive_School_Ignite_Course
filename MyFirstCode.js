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


