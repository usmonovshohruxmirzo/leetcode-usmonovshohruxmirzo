let intersection = function(nums1, nums2) {
    return nums1.reduce((acc,curr) => (nums2.includes(curr) && !acc.includes(curr) ? [...acc, curr] : acc), [])
};
