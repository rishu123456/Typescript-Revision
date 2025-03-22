function Afetr1Sec(fn:()=>void){
    setTimeout(fn,1000)
}

Afetr1Sec(()=>{
    console.log("hiii there");
})