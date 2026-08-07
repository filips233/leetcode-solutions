/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let biggest = 0;
    let right = height.length - 1;
    let left = 0;

    while (right > left) {
        const containerHeight = Math.min(height[left], height[right]);
        const size = containerHeight * (right - left);
        if (size > biggest) biggest = size;
        height[left] > height[right] ? right-- : left++;
    }

    return biggest;
};
