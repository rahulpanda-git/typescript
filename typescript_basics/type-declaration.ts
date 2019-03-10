/* Primitive Types in TypeScript
    Unlike other Programming languages using Prefix type declaration,
    Typescript uses Postfix type declaration */
var num:number; //Number Type
var flag:boolean; //Boolean Type
var str:string; //String Type
var foo:undefined; //Undefined Data Type
var nothing:null; //Null Data Type

num = 10;
flag=true;
str='Rahul';

//Declaring Array
var numArr:number[]; //Number Array
numArr = [1,2,3];
numArr.push(4);
numArr.push(5);
numArr.pop();

var strArr:string[]; //String Array
strArr=['rahul','panda'];

//Tuples
var tupNumStr:[number,string]; //Tuple with first element as a number, and second as a String, here no. of elements is also restricted
tupNumStr = [1,'Rahul']; 