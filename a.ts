function S<T>(h:T[]){
    return h[0];

}

 const ele1=S<string>(["rishu","rai"]);
const ele2=S<number>([1,2]);
console.log(ele1);
console.log(ele2);
