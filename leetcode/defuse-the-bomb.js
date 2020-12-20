/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 * ref: https://leetcode.com/problems/defuse-the-bomb
 */

var sum = (arr, i, n) => {
    let result = 0;
    let length = arr.length;
    while (n !== 0) {
        result += arr[i++ % length];
        n--;
    }
    return result;
}


var decrypt = function(code, k) {
    if (k === 0) return new Array(code.length).fill(0);
    
    const arr = [];
    const length = code.length;
    let firstSum;
    
    if (k > 0) firstSum = sum(code, 1, k);
    else firstSum = sum(code, length + k, -k);
    arr.push(firstSum);
    
    const action = handler(k > 0 ? 'positive' : 'nagative');
    
    let nextSum = firstSum;
    for (let i = 1; i < length; ++i) {
        nextSum = action(code, length, nextSum, k, i);
        arr.push(nextSum);
    }
    
    return arr;
};

var handler = type => {
    return {
        positive: (code, length, firstSum, k, i) => {
            return firstSum - code[i] + code[(k + i) % length];
        },
        nagative: (code, length, firstSum, k, i) => {
            return firstSum + code[i - 1] - code[(length + i + k - 1) % length];
        },
    }[type];
}

