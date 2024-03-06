/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let result = '';

    let gcd = function(a, b) {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    };

    if (str1 + str2 === str2 + str1){
        n = gcd(str1.length, str2.length);
    }
    else {
        return '';
    }
    for (let i = 0; i < n; i++){
        result += str1[i];
    }
    return result;
};