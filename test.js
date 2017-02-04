"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Import shape class from shape.ts
var shape_1 = require("./shape");
//Decorator Example class
var Test = (function () {
    function Test() {
    }
    Test.prototype.method = function () {
        console.log("method is called..");
    };
    return Test;
}());
__decorate([
    test1(),
    test2()
], Test.prototype, "method", null);
function test1() {
    console.log("test1(): called");
}
function test2() {
    console.log("test2(): called");
}
console.log("==========Out-put of decorator===============");
var t = new Test();
t.method();
//Output of Import
console.log("===============Out-put of Import============");
var s1 = new shape_1.Shape();
s1.square();
s1.circle();
