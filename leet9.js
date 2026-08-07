/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = '';
    x = `${x}`;

    for (let i = x.length - 1; i >= 0; i--) {
        reverse += x[i];
    }

    if (x === reverse) {
        return true;
    }

    return false;
};
