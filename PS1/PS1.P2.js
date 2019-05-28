//Problem Set 1
//Problem 2

const expr = '8%3';
console.log([...expr]);
console.log([...expr][1]);

//const evaluate = expr => (fun())

///HERE const evaluate = expr => fun([...expr])

const fun = function (array) {
 if (array[1] == '%') {return (new Function((array[0], array[2]))}
 else {return 'need to include more cases'}
}
const anArray = [1,2,3,4,5,6];
console.log(anArray);
 console.log([...anArray][0]);


console.log(fun('8', '%','3'));