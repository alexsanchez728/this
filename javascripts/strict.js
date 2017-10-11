// 'this' is bound to the callsite of the function




// (function () {

// 	'use strict';

// 	console.log(this);
// 	// undefined
// 	// ... cause in strict mode you can't add to window scope

// }());

// var fubar = "42";

// function baz() {
// 	console.log("baz");
// 	bar();
// }

// function bar() {
// 	console.log("bar");
// 	foo();
// }

// function foo() {
// 	var fubar = "13";
// 	console.log("foo");
// 	console.log("this", this); // window
// 	console.log("this", this.fubar); // window's fubar; not 13, that's foo()'s fubar
// }

// baz();

// Event Listener Example

// var eventFxn = function(event) {
// 	console.log("event", event);
// 	console.log("event.target", event.target);
// 	console.log("this", this);
// };



// $("#my-button").click(eventFxn);


// // Example 2

// var a = 3;

// function foo() {
// 	console.log("this", this); // {a : 2, monkey : fff}
// 	console.log("this.a", this.a); // 2
// }

// var obj = {
// 	a: 2,
// 	monkey: foo // runs foo(), this.a === 2
// };

// obj.monkey();

// // example 3

// function foo() {
// 	console.log("this", this);
// 	console.log("this.a", this.a);
// }

// var obj2 = {
// 	a: 42,
// 	foo: foo
// };

// var obj1 = {
// 	a: 2,
// 	obj2: obj2
// };


// // obj1's obj2's foo() key, running foo, the paired value
// obj1.obj2.foo();

// Example 4

// function foo() {
// 	console.log("this", this);
// 	console.log("this.a", this.a);
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// var bar = obj.foo;

// var a = "global warming";


// // original binding inside of obj object
// obj.foo(); // this {a: 2, foo: ƒ}

// // copy of obj.foo()
// 	// reassigned binding to window when this runs
// bar(); // this.a global warming

// Example 5

function foo() {
	console.log("this", this);
	console.log("this.a", this.a);
}

function doFoo(fn) {
	return fn();
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global";

doFoo(obj.foo); // this window
								// this.a oops, global








