var isDate = function (input) {
  //   write your code here
	if (input instanceof Date) {
    return true;
 }

 // If the input is a string, try to parse it into a date object
 if (typeof input === 'string') {
    const date = new Date(input);
    return !isNaN(date.getTime());
 }

 // If the input is a number, try to parse it into a date object
 if (typeof input === 'number') {
    const date = new Date(input);
    return !isNaN(date.getTime());
 }

 // If the input is an object with a time value, return true
 if (input && typeof input.getTime === 'function') {
    return true;
 }

 // Otherwise, return false
 return false;

};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
