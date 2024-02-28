/// Second Maximum Number in an array //
function SecondMax(inp)
{
    let largest = inp[0]
    let secondLargest = null
    for (let i=1; i<inp.length; i++)
    {
      if (inp[i]>largest)
      {
        secondLargest=largest
        largest=inp[i]
      }
      else if (inp[i]<largest && inp[i]>secondLargest)
      {
        secondLargest=inp[i]
      }
    }
    return secondLargest
  }
  let arr=[6, 4, 8, 3, 11, 10, 9]
  let out=SecondMax(arr)
  console.log(out)

/// Second Minimum Number in an array //

  function SecondMini(inp)
{
    let Smallest = inp[0]
    let SecondSmallest = null
    for (let i=1; i<inp.length; i++)
    {
      if (inp[i]<Smallest)
      {
        SecondSmallest=Smallest
        Smallest=inp[i]
      }
      else if (inp[i]>Smallest && inp[i]<SecondSmallest)
      {
        SecondSmallest=inp[i]
      }
    }
    return SecondSmallest
  }
  let value1=[6, 4, 8, 3, 11, 10, 9]
  let out1=SecondMini(value1)
  console.log(out1)


// 2.Sort an array without using built in methods
    function Sort(inp)
  {
  let len=inp.length
  for( let i=0; i<len; i++)
  {
    for ( let j=0; j<len-1-i; j++)
    {
      if(inp[j]>inp[j+1])
      {
        let temp=inp[j]
        inp[j]=inp[j+1]
        inp[j+1]=temp
      }
    }
  }
  return inp
}
let res=[5,2,9,6,8,1]
console.log(Sort(res))


//3. write a function to remove the duplicate element from an array
function Duplicate(inp){
  let duplicates=[]
  for(let i=0; i<inp.length; i++)
  {
    for (let j=i+1; j<inp.length; j++)
    {
      if(inp[i]===inp[j])
      {
        duplicates.push(inp[i])
      }
    }
  }
  return duplicates
}
let num=[1,3,2,8,4,3,1,2,5]
let Result=Duplicate(num)
console.log(Result)


//write a function to remove duplicate elements in a string "HelloWorld" 
function Duplicate(val) {
    let duplicates = []
    for (let i=0; i<val.length; i++)
    {
        for (let j=i+1; j<val.length; j++)
        {
            let current=val[i]
            if (val.indexOf(current, i+1) ===-1)
            {
                continue
            }
            if (current===val[j])
            {
                duplicates.push(current)
                break
            }
        }
    }
    return duplicates
}
let input = "HelloWorld"
let Result1 = Duplicate(input)
console.log(Result1)



//5. Write function to convert camelCase to snake_case
function camelToSnake(str)
{
    return str.replace(/([A-Z])/g, match => `_${match.toLowerCase()}`)
}
let str = "haiHello"
let output = camelToSnake(str)
console.log(output)


// write a function to conver snake_case to camelCase
let Str='hai_hello'
let val=''
function snakeToCamel(Str){
    for( let i=0; i<Str.length; i++)
    {
        if(Str[i]==='_')
        {
            i++
            val+= Str[i].toUpperCase()
        }
        else{
            val+=Str[i]
        }
    }
    return val
}
console.log(snakeToCamel(Str))
