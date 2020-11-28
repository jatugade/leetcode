/**
 * https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
//Time: O(n) - 76ms
//Space: O(n) - 39.7mb
let minimumSwap = function(s1, s2) {
    let obj = {};
    for (let i = 0; i < s1.length; i++) {
        let str = s1[i] + s2[i];
        if (obj[str] === undefined) {
            obj[str] = 1;
        } else {
            obj[str]++;
        }
    }

    let count = 0;
    Object.keys(obj).forEach(key => {
        if (key === 'xy' || key === 'yx') {
            let swapCount = Math.floor(obj[key] / 2);
            count = count + swapCount;
            let remain = obj[key] % 2;
            if (remain === 0) {
                delete obj[key];
            } else {
                obj[key] = remain;
            }
        }
    });

    if (obj['xy'] === undefined && obj['yx'] === undefined) {
        return count;
    }

    if (obj['xy'] !== obj['yx']) {
        return -1;
    }

    if (obj['yy'] === 0 && obj['xx']  === 0) {
        return -1;
    }

    return count + 2;
};
