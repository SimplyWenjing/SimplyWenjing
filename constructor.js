/*作用域安全的构造函数*/
function Person (name,age,job) {
	if (this instanceof Person) {
		this.name = name;
		this.age = age;
		this.job = job;
	} else {
		return new Person(name,age,job);
	}
}
/*var person1 = new Person ("Jay",37,"star");
console.log(person1.name);
console.log(window.name);

var person2 = Person("Hanna",23,"star");
console.log(person2.name);*/

/*=====================构造函数窃取结合原型链============================*/
function Polygon (sides) {
	if (this instanceof Polygon) {
		this.sides = sides;
		this.getArea = function () {
			return 0;
		};
	} else {
		return new Polygon (sides);
	}
}

function Rectangle (width,height) {
	Polygon.call(this,2);
	this.width = width;
	this.height = height;
	this.getArea = function () {
		return this.width * this.height;
	};
}

Rectangle.prototype = new Polygon();

var rect = new Rectangle(10,15);
alert(rect.sides);