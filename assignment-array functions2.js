// Function Composition:ASSIGNMENT-06
// Implement a function compose that takes two functions and returns a new function that is the composition of the two.


// function a (num){
// 	return num**2
// }


// function b(num1){
// 	return num1**3
// }


// function newfuntion(func1,num,func2,num1){
// 	let out=func1(num)
// 	let out1=func2(num1)
// 	console.log(out)
// 	console.log(out1)


// }
// newfuntion(a,15,b,1)



// Function Composition:ASSIGNMENT-07
// Given an array of numbers, use higher-order functions to find the sum of squares of only the even numbers.

function callback(){
	let evennumbers=[2,4,6,8]
	return evennumbers
}



function sumofsquarenumbers(val){
let value =val()
 let square =value.map(el=>el**2)
 console.log(square)
 let sum =square.reduce((acc,el)=>acc+el)
 console.log(sum)


}

sumofsquarenumbers(callback)



// Function Composition:ASSIGNMENT-08
// Write a function customMap and customFilter that behave similarly to the built-in map and filter functions.


 let cmap =['ind','pak']

function custommap(){
let value =cmap
 let value1=value.map(el=>el.toUpperCase())
 console.log(value1)
 }


custommap()




 let customfilter =[25,25,25]

function custommap(){
let progresscard =[
{name:'praveen' , marks:80 },
{name:'bruno' , marks:60 },
{name:'russell' , marks:70 },
{name:'hussey' , marks:50 },

]


 let out=progresscard.filter(el=>el.startsWith('p'))
 return out


}


let result =custommap()
console.log(result)