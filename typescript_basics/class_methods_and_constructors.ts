class student{
    first_name:string;
    middle_name:string;
    last_name:string;
    rollno:number;
    branch:string;
    batch:number;

    constructor(){
        this.first_name="";
        this.middle_name="";
        this.last_name="";
    }

    print_student_details(){
        console.log("STUDENT DETAILS\n-----------------\nName: ",this.first_name+" "+this.middle_name+" "+this.last_name+"\nRoll No.: ",this.rollno,"\nBatch and Branch: "+this.batch+" ("+this.branch+")");
    }
}

var new_student = new student();
new_student.first_name="Rahul";
new_student.last_name="Panda";
new_student.rollno=672;
new_student.batch=2014;
new_student.branch="CSE";
new_student.print_student_details();

//Class Type 2
//Typescript doesn't allow overloaded constructors

class student2{
    first_name:string;
    middle_name:string;
    last_name:string;
    rollno:number;
    branch:string;
    batch:number;

    constructor(fname:string,mname:string,lname:string){
        this.first_name=fname;
        this.middle_name=mname;
        this.last_name=lname;
    }

    print_student_details(){
        console.log("\nSTUDENT DETAILS 2\n-----------------\nName: ",this.first_name+" "+this.middle_name+" "+this.last_name+"\nRoll No.: ",this.rollno,"\nBatch and Branch: "+this.batch+" ("+this.branch+")");
    }
}

var new_student2 = new student2("Rahul","","Panda");
new_student2.branch="CSE";
new_student2.rollno=672;
new_student2.batch=2014;
new_student2.print_student_details();