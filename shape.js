"use strict";
var Shape = (function () {
    function Shape() {
    }
    Shape.prototype.square = function () {
        console.log("Square method called");
    };
    Shape.prototype.circle = function () {
        console.log("Circle method called");
    };
    return Shape;
}());
exports.Shape = Shape;
