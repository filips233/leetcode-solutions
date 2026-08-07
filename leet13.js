/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    for (let mark = 0; mark < s.length; mark++) {
        if (s[mark] === 'M') {
            result += 1000;
        }
        if (s[mark] === 'D') {
            result += 500;
        }
        if (s[mark] === 'C') {
            if (s[mark + 1] === 'M') {
                result += 900;
                mark++;
            } else if (s[mark + 1] === 'D') {
                result += 400;
                mark++;
            } else {
                result += 100;
            }
        }
        if (s[mark] === 'L') {
            result += 50;
        }
        if (s[mark] === 'X') {
            if (s[mark + 1] === 'C') {
                result += 90;
                mark++;
            } else if (s[mark + 1] === 'L') {
                result += 40;
                mark++;
            } else {
                result += 10;
            }
        }
        if (s[mark] === 'V') {
            result += 5;
        }
        if (s[mark] === 'I') {
            if (s[mark + 1] === 'X') {
                result += 9;
                mark++;
            } else if (s[mark + 1] === 'V') {
                result += 4;
                mark++;
            } else {
                result += 1;
            }
        }
    }
    return result;
};
