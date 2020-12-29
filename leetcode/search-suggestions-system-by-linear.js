/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 * ref: https://leetcode.com/problems/search-suggestions-system
 */

var suggestedProducts = function(products, searchWord) {
    products.sort();
    
    let arr = [];
    let temp = [];
    const results = [];
    
    const length = searchWord.length;
    
    for (let i = 0; i < length; ++i) {
        const productLength = products.length;

        for (let j = 0; j < productLength; ++j) {
            if (products[j][i] === searchWord[i]) {
                if (arr.length !== 3) {
                    arr.push(products[j]);
                }
                temp.push(products[j]);
            }
        }
        results.push(arr);
        arr = [];
        products = temp;
        temp = [];
    }
    
    return results;
};
