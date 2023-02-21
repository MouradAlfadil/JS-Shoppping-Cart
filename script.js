/*console.log("Hello World");
let x = "Mourad";
let sum = 3 + 8;
console.log(sum);
sum += 10;
console.log(sum);

//JS IS DDUMB
console.log(10 == "10"); //loose comparison
console.log(10 === "10"); //strict comparison USE THIS ONE 


console.log(10 != "10"); //loose not equals 
console.log(10 !== "10"); //strict not equals 

//note than comparitors are normal equals are not
let value =10;
if (value >= 10){
    console.log("value is greater than 10")
}
else if (value === 9){
    console.log("value is 9")
}
else{
    console.log("value is less than 9")
}


//loops

for (let i=0;i<=10;i++)
{
    console.log(i);
}

while(true)
{
    console.log("Beans")
    break;
}


let names = ["Justin","Josh","Billy"];
console.log(names);
names.push("Laura");
console.log(names);

names.forEach(n => console.log(n));

names.forEach((n)=> {
    let result = n+ " From GC";
    console.log(result);
});


/*splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN) */
/*
names.splice(2,1);
console.log(names);



function funkcEtown(){
    console.log("FUNKYTOWN!")
}

funkcEtown();

function myfunc2(p){
    return p +" is here";
}

console.log(myfunc2("beans"))

arrowfunction = (k) => {
    return k + " used to be an advernturer like you"
}

console.log(arrowfunction("I"))
ordername =null;
price=null;
*/
//Exercise
let Cart = [];

function AddOrder(ordername, price){
    let newOrder = {
        OrderName: ordername,
        Price: price
    };
    Cart.push(newOrder);
    console.log(Cart);
}

function DisplayCart(){
    //console.log(employees);

    Cart.forEach((e) => {
        console.log(`OrderName: ${e.OrderName} Price: $${e.Price}`) 
    });
}

function SumCart(){
    //console.log(employees);
    let sum =0;
    Cart.forEach((s) => {
        sum = sum + s.Price;

    });
    console.log(`$${sum}`);
}
