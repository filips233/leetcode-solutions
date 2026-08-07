/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const lines = [];
    let direction = 0;
    let currentRow = 0;

    for (let i = 0; i < numRows; i++) {
        lines[i] = '';
    }

    for (let char of s) {
        lines[currentRow] += char;

        if (currentRow === numRows - 1) {
            direction = 1;
        } else if (currentRow === 0) {
            direction = 0;
        }

        if (direction === 0 && currentRow !== numRows - 1) {
            currentRow++;
        } else if (direction === 1 && currentRow !== 0) {
            currentRow--;
        }
    }

    return lines.join('');
};
