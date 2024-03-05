//Objects Exercises

//////////////////
////Problem 1
//////////////////

//Given the object
var employee1 = {
	name: "John Smith",
	job: "Programmer",
	age: 31,
	nameLength: function () {
		console.log(this.name.length);
	},
};

//Add a method called nameLength that prints out the length
// of the employees name to the console.

//////////////////
////Problem 2
//////////////////

//Given the object
var employee2 = {
	name: "John Smith",
	job: "Programmer",
	age: 31,
	report: function () {
		return alert(
			"Name is " + this.name + ", Job is " + this.job + ", Age is " + this.age
		);
	},
};

//Write program that will create an Alert in the browser of each of the
//object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31

//////////////////
////Problem 3
//////////////////

//Given the object
var employee3 = {
	name: "John Smith",
	job: "Programmer",
	age: 31,
	lastName: function () {
		console.log(this.name.split(" ")[1]);
	},
};
// Add a method called lastName that prints
//out the employees last name to the console.
