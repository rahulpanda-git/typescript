interface person{
    fname:string;
    lname:string;
    print_details();
}

class student implements person{
    fname: string;    lname: string;
    print_details() {
        console.log("Name: "+this.fname+" "+this.lname);
    }
}

//Duck Type
let aPerson: person = new student();

let someObj={
    fname: "Rahul",
    lname: "Panda",
    print_details:()=>"Rahul Panda"
};

aPerson = someObj;