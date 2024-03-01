//write a function to generate below pattern//
//	1
	// 2 9
	// 3 8 10
	// 4 7 11 14
	// 5 6 12 13 15//
   
function pattern(){
    let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    for(let i in arr){
        if(i==0){
            console.log(arr[0])
        }
        else if(i==1){
            console.log(arr[1],arr[8])
        }
        else if(i==2){
            console.log(arr[2],arr[7],arr[9])
        }
        else if(i==3){
            console.log(arr[3],arr[6],arr[10],arr[13])
        }
        else if(i==4)[
            console.log(arr[4],arr[5],arr[11],arr[12],arr[14])
        ]

    }

}
pattern()

