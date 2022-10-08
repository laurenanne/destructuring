// Assigning Variables to Object Properties

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;
  

//ES 2015 version: Object Destructuring

let a = {numbers: {a, b} } = obj;




// //Array Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// ES 2015 version

[0,1] = [1,0];


const raceResults = ([first, second, third, ...rest])=> 
    ({   first,
        second,
        third,
        rest
    });
