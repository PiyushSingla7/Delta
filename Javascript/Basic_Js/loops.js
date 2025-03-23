let str="Piyush";


for(let i=0;i<str.length;i++){  //for loop
    console.log(str[i]);
}


let i=0;
while(i<str.length){  //while loop
    console.log(str[i]);
    i++;
}


let j=0;
do{             //do while loop
    console.log(str[j]);
    j++;
}while(j<str.length);


for (let char of str){         //for of loop
    console.log(char);
}

// str.forEach((element) => {
//     console.log(element);
// });  this loop will not work beacuse string is not an array but we can convert it into array and then use this loop

let arr=str.split("");
arr.forEach((element) => {  //for each loop
    console.log(element);
});  //this will work because we converted string into array