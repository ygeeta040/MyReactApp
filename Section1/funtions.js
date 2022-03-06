// const add = function(a, b){
//     console.log(a+b);
// }
// add(20,45);



// function addv2(a,b){
//     return a+b;
// }
// ans=addv2(555,80);

// console.log(ans);

const checkPrime=(n)=>{
    isPrime =true;
  var msg="this is not visible";
  console.log(msg);
    for(let i=2; i<n; i++){
        if(n%i==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log("orime");
    }
    else{
        console.log(" not orime");
    }


}
checkPrime(21);
// console.log(msg);