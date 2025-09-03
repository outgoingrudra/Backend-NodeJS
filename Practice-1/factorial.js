function factorial(a){
    let val =1 
    for(i=1;i<=a;i++){
        val *=i
    }
    console.log(val)
}
module.exports = {factorial}