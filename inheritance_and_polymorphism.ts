class PersonalDetails{
    fname:string;
    lname:string;
    birth_date:number;
    birth_month:number;
    birth_year:number;

    constructor(fname:string, lname:string) {
        this.fname=fname;
        this.lname=lname;
    }

    print_details(){
        console.log("Name: "+this.fname+" "+this.lname+"\nDOB: "+this.birth_date+"/"+this.birth_month+"/"+this.birth_year);
    }
}

class student extends PersonalDetails{
    rollno:number;
    batch:number;
    branch:string;

    constructor(fname:string, lname:string){
        super(fname,lname);
    }

    print_details(){
        super.print_details();
        console.log("Roll No.: "+this.rollno+"\nBatch and Branch: "+this.batch+" ("+this.branch+")");
    }
}

var new_student = new student("Rahul","Panda");
new_student.birth_date=20;
new_student.birth_month=5;
new_student.birth_year=1995;
new_student.rollno=672;
new_student.batch=2014;
new_student.branch="CSE";

new_student.print_details();

//Implementing Polymorphism

var new_student2:PersonalDetails = new student("Rahul","Panda");
new_student2.birth_date=20;
new_student2.birth_month=5;
new_student2.birth_year=1995;
new_student2.print_details();