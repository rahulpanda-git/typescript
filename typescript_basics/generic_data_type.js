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
//Generic Data Type
function echo(arg) {
    return arg;
}
var mynum = echo(1);
var mystring = echo("String");
var person = /** @class */ (function () {
    function person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        fname = this.fname;
        lname = this.lname;
    }
    return person;
}());
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(fname, lname, dept) {
        var _this = _super.call(this, fname, lname) || this;
        _this.dept = dept;
        dept = _this.dept;
        return _this;
    }
    return manager;
}(person));
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(fname, lname, manager, dept) {
        var _this = _super.call(this, fname, lname) || this;
        _this.manager = manager;
        _this.dept = dept;
        manager = _this.manager;
        dept = _this.dept;
        return _this;
    }
    return employee;
}(person));
//Using Generic Function
function PersonEcho(person) {
    console.log("Name: " + person.fname + " " + person.lname);
    return person;
}
var manager_1 = new manager("Ravi", "Gupta", "DWH");
var employee_1 = new employee("Rohan", "Singh", "Ravi Gupta", "DWH");
var foo = PersonEcho(manager_1);
var foo_1 = PersonEcho(employee_1);
