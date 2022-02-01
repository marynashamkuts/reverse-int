module.exports = function reverse (n) {
 let reverseNumber = n.toString().split('').reverse().join('');
return parseInt(reverseNumber);  
}
