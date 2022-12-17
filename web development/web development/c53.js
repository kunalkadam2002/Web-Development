console.log("We can access js using this tech alos");

//here name and y are used as formal parametres and name and x is used as actual parametres
function f1(name,y){
    console.log(name + x);
    console.log(name+" is a hardworking boy");
}

function add(a,b,c){
    let d=a+b+c;
    return d;
    
    //w e cant add anything after we return a particular value from the function
    console.log("value of d is :")
}

let name1="kunal";
let name2="sameep";
let name3="om";
let name4="swapnil";
let x="  from satara "

//function is called as follows 
f1(name1,x);
f1(name2,x);
f1(name3,x);
f1(name4,x);
 
add(3,4,6);

//we will get here as undefined becoz the function f1 did not returned anything
let returnval1=f1(name);
console.log(returnval1);

let returnval2=add(3,4,6);
console.log(returnval2);