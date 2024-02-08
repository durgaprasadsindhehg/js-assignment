//Implement forEach:ASSIGNMENT01
//Write a function myForEach that takes an array and a callback function and performs the same action as the forEach method.//

let name =['karthik','abhi','vasista','varun']

function formyeach(name){
	let arr=name.toUpperCase()
	console.log(arr)
}

name.forEach(el=>formyeach(el))



//Implement map:ASSIGNMENT-02
//Create a function myMap that takes an array and a callback function and returns a new array with the results of applying the callback to each element.//

let array =[15,20,25,30]

function mymap(num){
	return num*2
}


let output =array.map(el=>mymap(el))

console.log(output)


//Implement filter:ASSIGNMENT-03
//Write a function myFilter that takes an array and a callback function and returns a new array containing only the elements that satisfy the callback condition.//

let age =[5,6,10,11,15,20,25,40,42,43,44]

function myfilter(val){
	return (val>=15)
}

let specifiedage=age.filter(el=>myfilter(el))
console.log(specifiedage)




// Implement reduce:ASSIGNMENT-04
// Create a function myReduce that takes an array, a callback function, and an initial value, and applies the callback function to reduce the array to a single value.

let array1 = [1, 2, 3, 4];
function myreduce(){
let  initialvalue = 0;
let sum = array1.reduce((acc, cvalue) => acc + cvalue,initialvalue);
console.log(sum)
}

myreduce()
