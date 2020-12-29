/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 * ref: https://leetcode.com/problems/search-suggestions-system/
 */

function TrieNode() {
    this.childrens = [];
    this.isEndOfWord = false;
}

function insertWordToTrie(head, word) {
   const wordLength = word.length;
    
    for (let i = 0; i < wordLength; ++i) {
        const charCode = word.charCodeAt(i) - 97;
        if (!head.childrens[charCode]) {
            head.childrens[charCode] = new TrieNode();
        }
        head = head.childrens[charCode];
    }
    
    head.isEndOfWord = true; 
}

function searchProduct(head, searchWord) {
    const results = [];
    const searchWordLength = searchWord.length;
    for (let i = 0; i < searchWordLength; ++i) {
        const charCode = searchWord[i].charCodeAt(0) - 97;
        if (!head.childrens[charCode]) {
            return [];
        } else {    
            head = head.childrens[charCode];
        }
    }
    
    function getWords(_head, s) {
        if (results.length === 3) return;
        if (_head.isEndOfWor) {
            results.push(s);
        };
        const length = _head.childrens.length;
        for (let i = 0; i < length; ++i) {
            if (!_head.childrens[i]) continue;
            
            const char = String.fromCharCode(i + 97);
            getWords(_head.childrens[i], s + char);
        }
    }
    
    getWords(head, searchWord);
    
    return results;
}

var suggestedProducts = function(products, searchWord) {
    const head = new TrieNode();
    
    const productQuantity = products.length;
    const searchWordLength = searchWord.length;
    const results = [];
    
    // insert all words into Trie
    for (let i = 0; i < productQuantity; ++i) {
        insertWordToTrie(head, products[i]);
    }
    
    let s = '';
    for (let i = 0; i < searchWordLength; ++i) {
        s += searchWord[i];
        results.push(searchProduct(head, s));
    }
    
    return results;
};d
