/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const arr = nums1.concat(nums2).sort(function(a, b) {
        return a - b;
    });
    
    const halfLength = arr.length / 2;

    if (arr.length % 2 === 0) {
        return ((arr[halfLength] + arr[halfLength - 1]) / 2);
    }

    return arr[Math.floor(halfLength)];
};
