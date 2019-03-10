"use strict";
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
exports.__esModule = true;
//Modules help break the source code into various parts
var module_classes_1 = require("./module_classes");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(first_name, last_name, roll_no, branch, batch) {
        var _this = _super.call(this, first_name, last_name) || this;
        _this.roll_no = roll_no;
        _this.branch = branch;
        _this.batch = batch;
        return _this;
    }
    Student.prototype.print_details = function () {
        _super.prototype.print_details.call(this);
        console.log("Roll No.: " + this.roll_no + "\nBatch & Branch: " + this.batch + " (" + this.branch + ")");
    };
    return Student;
}(module_classes_1.Person));
var student_1 = new Student("Rahul", "Panda", 672, "CSE", 2014);
student_1.print_details();
