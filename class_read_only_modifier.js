var student = /** @class */ (function () {
    function student(rno, first_name, last_name) {
        this.college_name = "National Institute of Science and Technology (NIST)";
        this.fname = first_name;
        this.lname = last_name;
        this.rollno = rno;
    }
    student.prototype.print_details = function () {
        console.log("Student Name : " + this.fname + " " + this.lname + "\nRoll No.: " + this.rollno + "\nCollege Name: " + this.college_name);
    };
    return student;
}());
var new_student = new student(672, "Rahul", "Panda");
//new_student.college_name="" College Name cannot be re-assigned
new_student.print_details();
