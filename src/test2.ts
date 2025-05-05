interface Person{
    name:string,
    age:number,
    isStudent:boolean
};

function greetPerson(person:Person):string{
    if(person.isStudent){
        return `Hello, My name is ${person.name}. I am ${person.age} years old and I am Student`;
    }else{
        return `Hello, My name is ${person.name}. I am ${person.age} years old and I am not a Student`;
    }
}

//console.log(greetPerson({name:"Jhon",age:20,isStudent:true}));
//console.log(greetPerson({name:"Ram",age:30,isStudent:false}));

interface shape{
    name:string,
    getArea():number
}

class Rec implements shape{
    name:string;
    height:number;
    width:number;
    constructor(width:number,height:number){
        this.name="Rec",
        this.height=height;
        this.width=width;
    }
    getArea(){
        return this.width*this.height;
    }
}

let rec=new Rec(23,12);
//console.log(rec.name);
//console.log(rec.getArea());


interface ApiResponse<T>{
    success:boolean,
    data:T,
    message:string
}

interface User{
    id: number,
    username: string,
    email: string
}

async function getUserData(): Promise<ApiResponse<User>>{
    return {
        success:true,
        message:"User logged successfully",
        data:{
            id:102,
            username:"Ram",
            email:"ram@gmail.com"
        }
    }
}
//getUserData().then(console.log);

async function getAllUsers(success:boolean):Promise<ApiResponse<User[]>>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(success){
            resolve({
                success:true,
                message:"User logged successfully",
                data:[{
                    id:102,
                    username:"Ram",
                    email:"ram@gmail.com"
                }]
            }
            )}else{
            reject({
                success: false,
                message: "Failed to fetch users",
                data: []
              })
        }},1000)
    });
}

//getAllUsers(true).then(response=>console.log(response)).catch(error=>console.log(error));
//getAllUsers(false).then(response=>console.log(response)).catch(error=>console.log(error));

type animal="Rabbit" | "Lion" | "Fox";

interface animalInfo{
    id:number;
    age:number;
}

const information : Record<animal, animalInfo>={
    Rabbit:{id:11,age :12},
    Lion:{id:12,age:21},
    Fox:{id:13,age:24}
};
//console.log(information.Lion.age);

interface Todo{
    title:string,
    description:string,
    completed:boolean
}

type todoPreview=Pick<Todo, "title"|"description">;

const todo:todoPreview={
    title:"Clean room",
    description:"The room is very clean"
}

//console.log(todo);

type todoP=Omit<Todo, "completed">;

const todo1:todoP={
    title:"Dirty room",
    description:"The room is not cleaned"
};

//console.log(todo1);

function toHex(this:number){
    return this.toString(16);
}

function numbertoHex(n:ThisParameterType<typeof toHex>){
    return toHex.apply(n);
}

//console.log(numbertoHex(218));

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(215);
 
console.log(fiveToHex());