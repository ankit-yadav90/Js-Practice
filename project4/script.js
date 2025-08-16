function abcd(){
  console.log("hey")
}

abcd();

//return matlab jaha se aay ho wahi daal denge

function abc() {
  return 12;
}

let val = abc();
console.log(val)

//first class function ko valu ki trah  treat kare

function abcde(val){
    val();
}

abcde(function(){
  console.log("hay")
})

//High order function wo function hota hei jo ki return kare function ya fir accept kare function apne parametr me

function ab(){
  return function(){
    console.log("heyehye")
  }
}

ab()();

// closures ek functon jo return kre ek on function or return hone wala function youse karega parent function ka koi variable
function a(){
  let b = 12;
  return function(){
    console.log(b)
  }
}

a()();

//IIFE

(function init(){
  console.log("Initialized")
})();