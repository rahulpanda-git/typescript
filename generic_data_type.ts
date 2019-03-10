//Generic Data Type
function echo<T>(arg:T):T {
    return arg;
}

var mynum = echo(1);
var mystring = echo("String");

class person{
    constructor(public fname:string, public lname:string){
        fname=this.fname;
        lname=this.lname;
    }
}
class manager extends person{
    constructor(fname:string, lname:string, private dept:string){
        super(fname,lname);
        dept=this.dept;
    }
}
class employee extends person{
    constructor(fname:string, lname:string, private manager:string, private dept:string){
        super(fname,lname);
        manager=this.manager;
        dept=this.dept;
    }
}
//Using Generic Function
function PersonEcho<T extends person>(person: T):T{
    console.log("Name: "+person.fname+" "+person.lname);
    return person;
}

let manager_1 = new manager("Ravi","Gupta","DWH");
let employee_1 = new employee("Rohan","Singh","Ravi Gupta","DWH");

var foo = PersonEcho(manager_1);
var foo_1 = PersonEcho(employee_1);