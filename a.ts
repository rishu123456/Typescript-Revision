// import { use } from "react";

// function PrintDetail(user:{name:string;lastname:string;age:number}):boolean{
//    if(user.age>18){
//     return true;
//    }
//    else{
//     return false;
//    }

// }

//  const val= PrintDetail(
//     {
//         name:"rishu",
//         lastname:"tai",
//         age:21,
//     }
// )
// console.log(val);

interface User  {
    firstName : string,
    lastName : string,
    age: number
}


function CheckAge(user:User){
    if(user.age>18){
        return true;
    }
    else{
       return false;
    }

}

console.log(CheckAge({firstName:"rishu",lastName:"rai",age:12}))