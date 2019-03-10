function add(num1:number, num2:number):number{
    return num1+num2;
}

var result = add(1,2);
console.log('Result(1)=> ',result);

//Optional Argument
function sum(num1:number,num2:number,num3?:boolean) {
    if(num3==true){num2+=1;}
    return num1+num2;
}
var result2=sum(1,2,true); console.log('Result(2)=> ',result2);
var result3=sum(1,2); console.log('Result(3)=> ',result3);

//Argument with default value
function nsum(num1:number, num2:number, num3:number=0, num4:number=0){
    return num1+num2+num3+num4;
}
var result4=nsum(1,2); console.log('Result(4)=> ',result4);
var result5=nsum(1,2,3); console.log('Result(5)=> ',result5);
var result6=nsum(1,2,3,4); console.log('Result(6)=> ',result6);
