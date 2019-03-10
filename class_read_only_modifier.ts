class student{
    fname:string;
    lname:string;
    rollno:number;
    readonly college_name:string="National Institute of Science and Technology (NIST)";

    constructor(rno:number, first_name:string, last_name:string){
        this.fname=first_name;
        this.lname=last_name;
        this.rollno=rno;
    }

    print_details(){
        console.log("Student Name : "+this.fname+" "+this.lname+"\nRoll No.: "+this.rollno+"\nCollege Name: "+this.college_name);
    }
}

var new_student = new student(672, "Rahul", "Panda");
//new_student.college_name="" College Name cannot be re-assigned
new_student.print_details();

