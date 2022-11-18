conditional statements
const a = 10;

if (a < 0) {
  console.log("This is less then 0.");
} else {
  console.log("This is greater then 0.");
}

try and catch error
const a = 10;
const b = 20;

try {
    if(a>b) {
        console.log("a is greater.");
    } else {
        throw new Error("b is greater.");
    }
} catch (error) {
    console.log(error);
}

functions
const a = 10;
function square(x) {
  return x * x;
}

console.log(square(10));
square(10);

const a = "10";
function print(x){
return console.log(x);

}
print(10);

// npm init -y

const dumbo = require("cowsay");

console.log(dumbo.say({
    text : "Dharmishta is cute.",
    e : "oo",
    T : "L"
}));

// or cowsay.think()