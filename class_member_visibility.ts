class Person{
    private first_name:string;
    private last_name:string;

    constructor(fname:string, lname:string){
        this.first_name=fname; this.last_name=lname;
    }

    print_name(){
        console.log("Name: "+this.first_name+" "+this.last_name);
    }
}

class student extends Person{
    constructor(fname:string, lname:string){
        super(fname,lname);
    }
}

var new_student = new student("Rahul","Panda");
new_student.print_name();