/*  largestPalindromeProduct(multiplicands, digits)
 *
 *  @param multiplicands  the amount of multiplicands to multiply by
 *  @param digits         the amount of digits in each multiplicand
 *
 *  @returns an object containing the 
 *  two factors used to produce the palindromeNumber
 *  and the palindromeNumber itself.
 */
exports.largestPalindromeProduct = function(multiplicands, digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;//largest palindrome found
  
  for (x =  100; x <= 999; x++) {
    for (y = x; y <= 999; y++) {
      var product = x * y;//need to change number to array
      //change number to string
      var numberToString = product.toString();
      
      //change string to array  //able to string functions in one line
      var numberToString_ar = numberToString.split("");//.reverse().join("");
      
      //reverse string
      var reverseOfTheString = numberToString_ar.reverse();
      
      //rejoin first as not accurate to compare 2 objects
      var numberToString_reverse = numberToString_ar.join("");

      //compare with reverse
      if (numberToString == numberToString_reverse) {
        console.log(numberToString, " is palindrome");

        //find largest
        if (parseInt(numberToString) > palindromeNumber){
          palindromeNumber = parseInt(numberToString);
          factor_0 = x;
          factor_1 = y;
        }

        // palindromeNumber = numberToArray;
        // break;  
      };
    };
  };

  
  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};