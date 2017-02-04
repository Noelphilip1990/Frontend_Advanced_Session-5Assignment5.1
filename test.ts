//Import shape class from shape.ts
import { Shape } from './shape';
//Decorator Example class
class Test
{
	@test1()
	@test2()
	method(){
		console.log("method is called..");
	}
}

function test1():any {
		console.log("test1(): called");
	}
function test2():any {	
		console.log("test2(): called");
	}

console.log("==========Out-put of decorator===============");
let t = new Test();
t.method();
//Output of Import
console.log("===============Out-put of Import============");
let s1 = new Shape();
s1.square();
s1.circle();