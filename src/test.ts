function calculateTotal(price:number,tax:number):Promise<number>{
    return new Promise((resolve)=>{
        resolve(price+price*tax);
    });
}

async function fetchTotal(price:number,tax:number):Promise<void>{
    let promise=await calculateTotal(price,tax);
    console.log(promise);
}

//fetchTotal(100,0.1);

function optional(obj:{x:string,y?:string}){
  return `${obj.x}, ${obj.y}`;
}
let obj={x:"Mouni"};
//console.log(optional(obj));


function check(id:string | number){
  return `My Id is ${id}`;
}

// console.log(check("202"));
// console.log(check(102));



function employee(names:string[] | string){
  if(Array.isArray(names)){
    console.log(`Hello `+names.join(" and "));
  }else{
    console.log("Welcome to the softsuave "+names);
  }
}

//employee(["Ram","Ravi"]);
//employee("Mounika");


class Person{
  constructor(name:string){}
}

let person=new Person("Jhon");
//console.log(person instanceof Person);

class Circle{
  constructor(public radius:number){}
}

class Square{
  constructor(public side:number){}
}

class Rectangle{
  constructor(public length:number,public width:number){}  
}
type Shape=Circle | Square | Rectangle
function calculate(shape:Shape):number | Error{
  if(shape instanceof Circle){
    return Math.PI*shape.radius*shape.radius;
  }else if(shape instanceof Square){
    return shape.side*shape.side;
  }else if(shape instanceof Rectangle){
    return shape.length*shape.width;
  }else{
    return new Error("Unknown shape");
  }
}
const circle=new Circle(10);
const square=new Square(5);
const rectangle=new Rectangle(10,12);

//console.log(calculate(circle));
//console.log(calculate(square));
//console.log(calculate(rectangle));


class Stack<T>{
  private items:T[]=[];
  Push(item:T){
    this.items.push(item);
  }
  Pop():T | undefined{
    return this.items.pop();
  }
  Peek():T | undefined{
    return this.items[this.items.length-1];
  }
  Size(){
    return this.items.length;
  }
}

let stack=new Stack<number>();
stack.Push(2);
stack.Push(5);
stack.Push(6);
//console.log(stack.Peek());
//console.log(stack.Size());

function identity<T>(x:T):T{
  return x;
}

//console.log(identity<string>("Hello"));
//console.log(identity<number>(123));


class Box<T>{
  constructor(public value:T){
    this.value=value;
  }
  getValue(){
    return this.value;
  }
  setValue(item:T){
    this.value=item;
  }
}

let box=new Box<string>("Hi");
//console.log(box.getValue());
box.setValue("Hello");
//console.log(box.getValue());

let boxNum=new Box<number>(6);
//console.log(boxNum.getValue());
boxNum.setValue(10);
//console.log(boxNum.getValue());


function f(n:number){
  console.log(n.toFixed());
  console.log(n.toFixed(5));
}

//f(123456);


function multiply(n:number,...x:number[]){
  return x.map((y)=>n*y);
}

let a=multiply(10,1,2,3,4,5);
//console.log(a);


function greet(name:string):string
function greet(name:string,age:number):string | number
function greet(name:string,age?:number):string | number{
  if(age!==undefined){
    return `name: ${name}, age:${age}`;
  }else{
    return `name: ${name}`;
  }
}

//console.log(greet("Mounika"));
//console.log(greet("Mouni",20));


function cal(a:number,b:number, callback:(result:number)=>void):void{
  let result=a*b;
  callback(result);
}

cal(5,5,(result)=>{
  console.log(result);
});


