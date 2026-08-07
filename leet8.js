/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let positive = true;
    s = s.trim();
    if (s[0] === '-') {
        positive = false;
    }
    if (s[0] === '-' || s[0] === '+') {
        s = s.slice(1);
    };

    let regex = /\d/;
    let score = '';

    for (let i = 0; i < s.length; i++) {
        if (!regex.test(s[i])) {
            break;
        }
        score += s[i];
    }
    
    return positive ? Number(score) >= 2**31 - 1 ? 2**31 - 1 : Number(score) : Number(score) * -1 <= (-2)**31 ? (-2)**31 : Number(score) * -1;
};
