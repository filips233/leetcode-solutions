/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let number = 0;
    if (x < 0) {
        x = `${x}`.replace('-','');
        number = Number(`${x}`.split('').reverse().join(''));
        return number * -1 <= (-2)**31 ? 0 : number * -1;
    }
    number = Number(`${x}`.split('').reverse().join(''));
    return number >= 2**31 - 1 ? 0 : number;
};
