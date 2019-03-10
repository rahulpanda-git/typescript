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
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.first_name = fname;
        this.last_name = lname;
    }
    Person.prototype.print_name = function () {
        console.log("Name: " + this.first_name + " " + this.last_name);
    };
    return Person;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(fname, lname) {
        return _super.call(this, fname, lname) || this;
    }
    return student;
}(Person));
var new_student = new student("Rahul", "Panda");
new_student.print_name();
