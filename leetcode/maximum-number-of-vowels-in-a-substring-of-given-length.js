/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = {
        u: true,
        e: true,
        o: true,
        a: true,
        i: true
    };

    let i = 0;
    let j = 0;
    let count = 0;
    let max = 0;
    while (j < s.length) {
        if (j > k -1) {
            if (vowels[s[i]]) {
                --count;
            }
            ++i;
        }
        if (vowels[s[j]]) {
            ++count;
            max = Math.max(count, max);
        }
        ++j;
    }
    return max;
};


/**
 * "weallloveyou"
 * 7
 * 4
 * */
