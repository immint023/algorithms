/**
 * Initialize your data structure here.
 * ref: https://leetcode.com/problems/map-sum-pairs
 */

var Node = function() {
    this.childrens = new Array(26);
    this.val = null;
}

var MapSum = function() {
    this.head = new Node();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    let head = this.head;
    for (let i = 0; i < key.length; ++i) {
      const char = key[i];
      const charIndex = char.charCodeAt(0) - 97;
      if (!head.childrens[charIndex]) {
        const newNode = new Node();
        head.childrens[charIndex] = newNode;
        head = newNode;
      } else {
        head = head.childrens[charIndex]
      }
    }
    head.val = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */

MapSum.prototype.getLastNode = function(prefix) {
    let node = this.head;
    const wordLength = prefix.length;
    for (let i = 0; i < wordLength; ++i) {
      const char = prefix[i];
      const charIndex = char.charCodeAt(0) - 97;
      if (!node.childrens[carIndex]) return null;
      node = node.childrens[charIndex];
    }
    return node;
}

MapSum.prototype.sum = function(prefix) {
    var last = this.getLastNode(prefix);
    var sum = 0;
    var helper = (node) => {
        if (!node) return
        if (node.val) sum += node.val;
        for (let i = 0; i <= 25; ++i) {
            if (node.childrens[i]) {
                helper(node.childrens[i]);
            }
        }
    }
    
    helper(last);
    return sum;
};
h
