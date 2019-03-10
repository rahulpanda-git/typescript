var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonalDetails = /** @class */ (function () {
    function PersonalDetails(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    PersonalDetails.prototype.print_details = function () {
        console.log("Name: " + this.fname + " " + this.lname + "\nDOB: " + this.birth_date + "/" + this.birth_month + "/" + this.birth_year);
    };
    return PersonalDetails;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(fname, lname) {
        return _super.call(this, fname, lname) || this;
    }
    student.prototype.print_details = function () {
        _super.prototype.print_details.call(this);
        console.log("Roll No.: " + this.rollno + "\nBatch and Branch: " + this.batch + " (" + this.branch + ")");
    };
    return student;
}(PersonalDetails));
var new_student = new student("Rahul", "Panda");
new_student.birth_date = 20;
new_student.birth_month = 5;
new_student.birth_year = 1995;
new_student.rollno = 672;
new_student.batch = 2014;
new_student.branch = "CSE";
new_student.print_details();
//Implementing Polymorphism
var new_student2 = new student("Rahul", "Panda");
new_student2.birth_date = 20;
new_student2.birth_month = 5;
new_student2.birth_year = 1995;
new_student2.print_details();
