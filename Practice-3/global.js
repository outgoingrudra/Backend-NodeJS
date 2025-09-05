const fn=()=>{
    console.log(global)

console.log(globalThis)

if (globalThis ===global){
    console.log("Both are Same !!!")
}
// Actually in browser -> this , windows , self , frames 
// and in node js -> global and globalthis refers to same object 

}
fn()