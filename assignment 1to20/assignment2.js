// write a function to flatten the nested array
function input(arr){
    let result=[]
    for(let i=0; i<arr.length; i++)
    {
        if(typeof arr[i]=="number")
        {
            result.push(arr[i])
        }
        else {
            result.push(...input(arr[i]))
        }
    }
    return result
}
let arr=[1,2,[4,5,[7,8,9],10,11,12],13]
console.log(input(arr))


// Write a function to find the 2nd largest number in a nested array
function SecLargest(arr)
{
    let largest=0
    let secondLarge=0
    for (let i=0; i<arr.length; i++)
    {
        for (let j=0; j<arr[i].length; j++)
        {
            if (arr[i][j]>largest)
            {
                secondLarge=largest
                largest=arr[i][j]
            } 
            else if (arr[i][j]>secondLarge && arr[i][j] !== largest)
            {
                secondLarge=arr[i][j]
            }
        }
    }
    return secondLarge
}
let Array = [[1, 2,  4], [10, 5], [7, 8, 9]]
console.log(SecLargest(Array))

//program for adding zeros after 3 values in array 

function AddingZero(num)
{
    let result = []
    for (let i=0; i<num.length; i++)
    {
        result.push(num[i])
        if ((i+1) % 3 === 0 && i !== 0)
        {
            result.push(0)
        }
    }
    return result
}
let Arr = [1, 2, 3, 4, 5, 6, ]
console.log(AddingZero(Arr))



//11. Reverse a string a without using built in method 
function ReverseString(str)
{
    let reverse = ''
    for (let i=str.length-1; i>=0; i--)
    {
      reverse+=str[i]
    }
    return reverse
  }
  let Str = "vineeth s p"
  let f_out=ReverseString(Str)
  console.log(f_out)

//12. Write a function to return a fibonacci series


function Fibonacci(n) 
{
    if (n<=1)
    {
      return n
    } 
    else {
      return Fibonacci(n-1)+Fibonacci(n-2)
    }
  }
  let output = Fibonacci(10)
  console.log(output)


  //. write a function to find how many times an elements are repeated in an array [1,2,3,3,5,2,1,7,6,8,7,8] and in string "abcdaabdlfjl'
  function Count(inp)
{
    let dup = { }
    for (let i=0; i<inp.length; i++)
    {
        let element=inp[i]
        dup[element]=(dup[element] ||0)+1
    }
    return dup
}
let arr1= [15,16,17,18,18,19,15,20,21,22,19] 
console.log(Count(arr1))


//repeated element in string
function string(str)
{
    let dup = { }
    for (let i=0; i<str.length; i++)
    {
        let element=str[i]
        dup[element]=(dup[element] ||0)+1
    }
    return dup
}
let word = 'abcdaabdlfjl' 
console.log(string(word))


//15. write a function to capitalize the each words first letter to capital 
let words = ["abc","def","ghi"]
let Result=words.map(el=>el.charAt(0).toUpperCase()+el.slice(1))
console.log(Result)

//16. write a function to calculate the sum of total marks in an array of objects 
let obj=[
    { Subject:'Maths', Mark:60 },
    { Subject:'Science', Mark:70 },
    { Subject:'English', Mark:90 }
]
function Totals()
{
    let Total=0
    for(let i=0; i<obj.length; i++)
    {
      Total+=obj[i].Mark
    }
    return Total
}
console.log(Totals(obj))


// Write a function to remove the duplicate from 2 arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]
let a=[1,2,3,4,5]
let arr_a=[5,3,7,8,9]
let arr_b=[]
function duplicatearr(arr){
    for(let i=0; i<arr.length; i++)
    {
        if(arr_a.includes(arr[i]))
        {
           arr_b.push(arr[i])
        }
    }
    return arr_b
}
console.log(duplicatearr(a))
