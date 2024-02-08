/***ASSIGNMENTS -08***/
//Create a function that takes two numbers as parameters and returns the larger of the two.//

function largest(num1,num2){
	let a = num1
	let b = num2

	if(a>b){
			
		return 'A is largest'
	}

	else {
	
		return 'B is largest'
	}
}
let large =largest(4,400)
console.log(large)

/***ASSIGNMENTS -09**/
//Write a function that takes a person's name as a parameter and returns a greeting message.//

function greeting(name){
	return(`hello ${name} ,have a nice day.`)
}

let greet = greeting('durga prasad')
console.log(greet)



/***ASSIGNMENTS -10**/

//Implement a function that takes an array of numbers and returns their average.//
let x =[5,20,40,30]
function avg_array(){
  let sum =0
  for(n in x ){
  	sum=sum+x[n]

  }
 console.log(sum/x.length)

}

avg_array()



//Calculate Factorial:ASSIGNMENT -11
//Write a function to calculate the factorial of a non-negative integer.//

function factorial(num){
	let number=num
	if(number==0){
		return 1
	}
   console.log(`${number}*${number-1}`)
   return number*factorial(number-1)
}
let output = factorial(10)
console.log(output)
