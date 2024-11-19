// 1. Variable Declaration and Assignment
// - Create a variable city with the value "Tbilisi" and log it to the console.
// - Reassign the value of city to "Batumi" and log the new value.

// ==============================პასუხი=============================================
// let city = "Tbilisi";
// console.log(city);
// city = "Batumi";
// console.log(city);

// 2. Arithmetic Operations
// - Declare two variables, a and b, with values 7 and 15 respectively.
// - Calculate their sum and log the result.
// - Subtract b from a and log the result.
// - Multiply a and b and log the result.
// - Divide b by a and log the result.

// ==============================პასუხი=============================================
// let a = 7;
// let b = 15;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(b / a);

// 3. String Manipulation
// - Declare two variables, firstName and lastName, with your first and last name.
// - Concatenate them into a variable fullName and log it to the console.
// - Use a template literal (use google) to log "Hello, my name is [fullName]!".

// ==============================პასუხი=============================================
// let firstName = "Goga";
// let lastName = "Bagauri";
// let fullName = firstName + " " + lastName;
// console.log(fullName);
// console.log(`Hello, my name is ${fullName}!`);

// 4. Prompt, Confirm, and Alert
// Write a script that:
// - Prompts the user for their name.
// - Alerts "Hello, [name]! Welcome to our site!".

// ==============================პასუხი=============================================
// let userName = prompt("What is your name?");
// alert("Hello, " + userName + "! Welcome to our site!");

// (Optional) Write a script that:
// - Asks the user to confirm if they want to subscribe to a newsletter.
// - Logs Subscribed if the user clicks "OK" or Not Subscribed if they click "Cancel".
// - additional resource for the task: https://www.w3schools.com/js/js_if_else.asp

// ==============================პასუხი=============================================
// if (confirm("Do you want to subscribe to a newsletter?")) {
//      console.log("Subscribed");
// } else {
//     console.log("Not subscribed");
// }

// 5. Type Conversion and Comparisons
// - Ask the user for their birth year using prompt and convert it to a number.
// - Calculate their age by subtracting their birth year from the current year. It would be better to google and use new Date to get current year.
// - Log "You are [age] years old!."

// ==============================პასუხი=============================================
// let birthYear = +prompt("What is your birth year?");
// let userAge = new Date().getFullYear() - birthYear;
// console.log(`You are ${userAge} years old!`);
