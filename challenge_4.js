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
  var palindromeNumber = 0;
  // do your work here
  
  for (factor_0 =  100; factor_0 <= 999; factor_0++) {
    for (factor_1 = 100; factor_1 <= 999; factor_1++) {
      var product = factor_0 * factor_1;//need to change number to array
      var numberToArray = product.split("");
      console.log(numberToArray, numberToArray.reverse());
      if (numberToArray === numberToArray.reverse()) {

        palindromeNumber = numberToArray;
        break;  
      };
    };
  };

  
  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};