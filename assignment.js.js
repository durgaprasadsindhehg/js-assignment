/************ASSIGNTMENT-01************/
let x = 0
let y = 0 

 if (x>0)
 {
 	console.log('this is a positive number')
 }
 else if(y<0){
 	console.log('this is a negative number')
 }

 else{
 	console.log('the value is zero')
 }

/*********Assignment-02*********/
let leap =2023
div = 2023%4

div == 0 ?console.log('this is leap year'):console.log('this is not a leap year')

/***************or ***************/
let year =2023
lyear= year%4


if (lyear==0){
	console.log('this is leap year')
}

else{
	console.log('this year is not a leap year ')
}

/********************ASSIGNMENT-03************/
let a = 50
let b = 40
let c =100

 if (a>b&& a>c)
 {
 	console.log('this is A first highest  number')
 }


 else if (b>a&&b>c )
 {
 	console.log('this is a second highest number')
 }

 else if (c>a&&c>b)
 {
 	console.log('this is a third highest number')
 }

 /******************ASSIGNMENT -04*********************/

 let signal ='yellow'
 switch(signal)
 {
 	case 'red':
 	console.log('stop!The signal is red')
    break
 	case 'green':
 	console.log('go!The signal is green')
    break
 	case 'yellow':
 	console.log('slow !The signal is yellow')
 	break
 	default:
 	console.log('follow the signal safe drive')
 }