// // Задание № 1
// let calculator = {
// 	read: function () {
// 		this.x = +prompt();
// 		this.y = +prompt();
// 	},
// 	sum: function () {
// 		return this.x + this.y;
// 	},
// 	multi: function () {
// 		return this.x * this.y;
// 	},
// 	diff: function () {
// 		return this.x - this.y;
// 	},
// 	div: function () {
// 		return this.x / this.y;
// 	},
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.multi());
// alert(calculator.diff());
// alert(calculator.div());

// // Задание № 2
// let coffee_Machine = {
// 	message: "Your coffee is ready!",
// 	start: function () {
// 		setTimeout(alert, 3000, this.message);
// 	},
// };
// coffee_Machine.start();

// // Задача № 3
// let counter = {
// 	count: 0,
// 	inc: function () {
// 		this.count++;
// 		return this;
// 	},
// 	dec: function () {
// 		this.count--;
// 		return this;
// 	},
// 	getValue: function () {
// 		return this.count;
// 	},
// };

// let count = counter.inc().inc().inc().dec().dec().inc().getValue();
// console.log(count);

// // Задача № 4
// let obj = {
// 	getSum: function (x, y) {
// 		this.x = x;
// 		this.y = y;
// 		return x + " + " + y + " = " + calculator.sum.call(obj);
// 	},
// 	getMulti: function (x, y) {
// 		this.x = x;
// 		this.y = y;
// 		return x + " * " + y + " = " + calculator.multi.call(obj);
// 	},
// 	getDiff: function (x, y) {
// 		this.x = x;
// 		this.y = y;
// 		return x + " - " + y + " = " + calculator.diff.call(obj);
// 	},
// 	getDiv: function (x, y) {
// 		this.x = x;
// 		this.y = y;
// 		return x + " / " + y + " = " + calculator.div.call(obj);
// 	},
// };
// alert(obj.getSum(10, 2));
// alert(obj.getMulti(10, 2));
// alert(obj.getDiff(10, 2));
// alert(obj.getDiv(10, 0));

// // Задача № 5
// let country = {
// 	name: "Ukraine",
// 	language: "ukrainian",
// 	capital: {
// 		name: "Kyiv",
// 		population: 2907817,
// 		area: 847.66,
// 	},
// };

// function format(start, end) {
// 	console.log(start + this.name + end);
// }

// format.call(country, "", "");
// format.apply(country, ["[", "]"]);
// format.call(country.capital, "", "");
// format.apply(country.language, ["", ""]);

// // Задача № 6
// let user = {
// 	name: "Dima",
// };

// function format(start, end) {
// 	console.log(start + this.name + end);
// }

// function userFormat(string1, string2) {
// 	format.bind(user)(string1, string2);
// }

// userFormat("!!!", "!!!");

// // Задача № 7
// function concat (str1, str2, delimiter) {
// 	console.log(str1  + delimiter +  str2);
// }

// function hello (name) {
// 	concat.bind(null, "Hello", name, " ");
// }

// hello("Dima");

// // Задача № 8 цикл
// function pow(x, int) {
// 	let result = 1;
// 	for (let i = 0; i < int; i++) {
// 		result *= x;
// 	}
// 	return result;
// }

// console.log(pow(5, 3));

// // Задача № 8 рекурсия
// function pow(x, int) {
// 	int--;
// 	if(int >= 1) {
// 		return x * pow(x, int);
// 	}
// 	else {
// 		return x;
// 	}
// }
// console.log(pow(3,3));

// // Задача № 9
// function getSum(...arr) {
// 	let sum = null;
// 	if (arr.length != 0) {
// 		sum = arr[arr.length - 1];
// 		arr.length = arr.length - 1;
// 		sum += getSum(...arr);
// 	}
// 	return sum;
// }
// console.log(getSum(1, 5, 10, 20));
