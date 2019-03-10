var student = /** @class */ (function () {
    function student() {
        this.first_name = "";
        this.middle_name = "";
        this.last_name = "";
    }
    student.prototype.print_student_details = function () {
        console.log("STUDENT DETAILS\n-----------------\nName: ", this.first_name + " " + this.middle_name + " " + this.last_name + "\nRoll No.: ", this.rollno, "\nBatch and Branch: " + this.batch + " (" + this.branch + ")");
    };
    return student;
}());
var new_student = new student();
new_student.first_name = "Rahul";
new_student.last_name = "Panda";
new_student.rollno = 672;
new_student.batch = 2014;
new_student.branch = "CSE";
new_student.print_student_details();
//Class Type 2
var student2 = /** @class */ (function () {
    function student2(fname, mname, lname) {
        this.first_name = fname;
        this.middle_name = mname;
        this.last_name = lname;
    }
    student2.prototype.print_student_details = function () {
        console.log("\nSTUDENT DETAILS 2\n-----------------\nName: ", this.first_name + " " + this.middle_name + " " + this.last_name + "\nRoll No.: ", this.rollno, "\nBatch and Branch: " + this.batch + " (" + this.branch + ")");
    };
    return student2;
}());
var new_student2 = new student2("Rahul", "", "Panda");
new_student2.branch = "CSE";
new_student2.rollno = 672;
new_student2.batch = 2014;
new_student2.print_student_details();
