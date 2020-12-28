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

// // Задача № 8
// function pow(x, int) {
// 	let result = 1;
// 	for (let i = 0; i < int; i++) {
// 		result *= x;
// 	}
// 	return result;
// }

// console.log(pow(5, 3));

function pow(int) {
	// int--;
	if (int != 1) {
		console.log(int);
		return int *= pow(int - 1) + pow(int - 2);
		// return s;
	}
	return int;
}
console.log(pow(3));

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

// // Задача № 3
// let arr = [
// 	{
// 		firstName: "Имя 1",
// 		lastName: "Фамилия 1",
// 		age: 14,
// 	},
// 	{
// 		firstName: "Имя 2",
// 		lastName: "Фамилия 2",
// 		age: 15,
// 	},
// 	{
// 		firstName: "Имя 3",
// 		lastName: "Фамилия 3",
// 		age: 16,
// 	},
// 	{
// 		firstName: "Имя 4",
// 		lastName: "Фамилия 4",
// 		age: 17,
// 	},
// 	{
// 		firstName: "Имя 5",
// 		lastName: "Фамилия 5",
// 		age: 18,
// 	},
// 	{
// 		firstName: "Имя 6",
// 		lastName: "Фамилия 6",
// 		age: 19,
// 	},
// 	{
// 		firstName: "Имя 7",
// 		lastName: "Фамилия 7",
// 		age: 20,
// 	},
// 	{
// 		firstName: "Имя 8",
// 		lastName: "Фамилия 8",
// 		age: 21,
// 	},
// 	{
// 		firstName: "Имя 9",
// 		lastName: "Фамилия 9",
// 		age: 22,
// 	},
// 	{
// 		firstName: "Имя 10",
// 		lastName: "Фамилия 10",
// 		age: 23,
// 	},
// ];
// arr = arr.filter(function (element) {
// 	return element.age >= 18;
// });
// arr = arr.map(function (element) {
// 	const obj = {
// 		...element,
// 		fullName: element.firstName + " " + element.lastName,
// 	};
// 	return obj;
// });
// arr = arr.map(function (element) {
// 	return element.fullName;
// });
// console.log(arr);

// // Задача № 8
// function createTimer() {
// 	let time1 = performance.now();
// 	return function times() {
// 		let time2 = performance.now();
// 		let time = time2 - time1;
// 		return time;
// 	};
// }

// let timer = createTimer();
// alert("!");
// alert(timer());
