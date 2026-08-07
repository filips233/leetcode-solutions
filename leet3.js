/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map();

    let maxCount = 0;
    let currCount = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (map.has(s[j])) {
                break;
            }
            map.set(s[j], j);
            currCount++;
        };

        if (currCount > maxCount) maxCount = currCount;
        currCount = 0;
        map.clear();
    };
    return maxCount;
};
