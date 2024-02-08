/****Write a function that takes two parameters, a and b, and returns their sum.**/
function addition(num1,num2){
    let a =num1
    let b =num2
    return a +b
}
let output = addition(100,2000)
console.log(output)


// Create a function that takes a number as an argument and returns whether it is even or odd.

function oddeven(value){
    let number =value%2
    if(number==0){
        return 'number is even'
    }
    else{
        return 'number is odd'
    }

}
let result = oddeven(497)
console.log( result)




/****ASSIGNMENT-03***/
// Implement a function that takes a string as input and returns the reversed version of that string.**/

function rev(data){
  let str = data
  let reverse = str.split('').reverse().join('')
  console.log(reverse)
}
rev('hello')



/****ASSIGNMENT-04***/
//Write a function that calculates the square of a given number.//

function square(value){
    let number =value**2
    console.log(number)
}
square(15)


/****ASSIGNMENT-05***/
//Create a function that takes two strings as parameters and returns their concatenation.//

function concat(val1,val2){
    let str1 =val1
    let str2 =val2
    return str1+' '+str2
}
let output1=concat('durga','prasad')
console.log(output1)



// /****ASSIGNMENT-06***/
// // Implement a function that checks if a given string is a palindrome.

function palindrome(val){
    let name =val
    let name1=name.split('').reverse().join('')
 
   if(name1==name){
    console.log('it is a palindrome')
   }
   else{
    console.log('it is not a palindrome')
   }


}

palindrome('mam')