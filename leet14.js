/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    let current = '';
    if (strs.length === 1) return strs[0];
    for (let i = 1; i < strs.length; i++) {
        current = '';
        for (let j = 0; j < strs[i].length; j++) {
            if (strs[0][j] === strs[i][j]) {
                current += strs[0][j];
            } else {
                break;
            };
        };
        if (!prefix) prefix = current;
        if (!current) return '';
        if (current < prefix) prefix = current;
    };
    return prefix;
};
