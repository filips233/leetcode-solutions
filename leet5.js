/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    let max = '';
    if (s.length === 1) return s;

    const expander = (left, right) => {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        let odd = expander(i, i);
        let even = expander(i, i + 1);

        if (odd.length > max.length) max = odd;
        if (even.length > max.length) max = even;
    }
    
    return max.length === 0 ? s[0] : max;
};
