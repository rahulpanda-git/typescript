//Modules help break the source code into various parts
import {Person} from './module_classes';

class Student extends Person{
    constructor(first_name:string, last_name:string, private roll_no:number, private branch:string, private batch:number){
        super(first_name,last_name);
    }
    print_details(){
        super.print_details();
        console.log("Roll No.: "+this.roll_no+"\nBatch & Branch: "+this.batch+" ("+this.branch+")");
    }
}

var student_1 = new Student("Rahul","Panda",672,"CSE",2014);
student_1.print_details();