/**
 * https://leetcode.com/problems/minimum-window-substring/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
//Time: O(n * m) - 484ms
//Space: O(m) - 45.7mb
let minWindow = function(s, t) {
    let globalMin = Infinity;
    let matchIndex = {};
    let minSpanIndex = [];
    let hasMet = false;

    let obj = t.split('').reduce((obj, current) => {
        if (obj[current]) {
            obj[current]++;
        } else {
            obj[current] = 1;
        }
        return obj;
    }, {});

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if(obj[c]) {
            if (matchIndex[c] === undefined) {
                matchIndex[c] = [i];
            } else {
                let arr = matchIndex[c];
                if (arr.length === obj[c]) {//if required has been reached for character;
                    arr.pop();
                }
                arr.unshift(i);
            }

        }

        let values = Object.values(matchIndex);
        if (!hasMet) {
            let count = values.reduce((count, current) => {
                return count + current.length;
            }, 0)
            hasMet = count === t.length;
        }

        if (hasMet) {
            //O(n)
            let localMin = values.reduce((min, arr) => {
                return min > arr[arr.length - 1] ? arr[arr.length - 1] : min;
            }, Infinity);

            //O(n)
            let localMax = values.reduce((max, arr) => {
                return max < arr[0] ? arr[0] : max;
            }, -Infinity);


            let diff = localMax - localMin;
            if (diff < globalMin) {
                globalMin = diff;
                minSpanIndex = [localMin, localMax];
            }
        }
    }

    return s.slice(minSpanIndex[0], minSpanIndex[1] + 1);
};