/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = [];
    num = String(num);

    for (let i = num.length - 1; i >= 0; i--) {
        const counter = num.length - 1 - i;
        switch (counter) {
        case 0:
            if (num[i] === '9') {
                result.unshift('IX')
            } else if (num[i] === '4') {
                result.unshift('IV');
            } else if (num[i] === '0') {
                break;
            } else if (num[i] < 5) {
                result.unshift('I'.repeat(num[i]));
            } else {
                result.unshift('V' + 'I'.repeat(num[i] - 5));
            };
            break;
        case 1:
            if (num[i] === '9') {
                result.unshift('XC')
            } else if (num[i] === '4') {
                result.unshift('XL');
            } else if (num[i] === '0') {
                break;
            } else if (num[i] < 5) {
                result.unshift('X'.repeat(num[i]));
            } else {
                result.unshift('L' + 'X'.repeat(num[i] - 5));
            };
            break;
        case 2:
            if (num[i] === '9') {
                result.unshift('CM')
            } else if (num[i] === '4') {
                result.unshift('CD');
            } else if (num[i] === '0') {
                break;
            } else if (num[i] < 5) {
                result.unshift('C'.repeat(num[i]));
            } else {
                result.unshift('D' + 'C'.repeat(num[i] - 5));
            };
            break;
        case 3:
            result.unshift('M'.repeat(num[i]));
            break;    
        };
    };
    return result.join('');
};
