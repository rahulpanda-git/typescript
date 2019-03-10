var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.print_details = function () {
        console.log("Name: " + this.fname + " " + this.lname);
    };
    return student;
}());
//Duck Type
var aPerson = new student();
var someObj = {
    fname: "Rahul",
    lname: "Panda",
    print_details: function () { return "Rahul Panda"; }
};
aPerson = someObj;
