"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    Person.prototype.print_details = function () {
        console.log("Name : " + this.first_name + " " + this.last_name);
    };
    return Person;
}());
exports.Person = Person;
