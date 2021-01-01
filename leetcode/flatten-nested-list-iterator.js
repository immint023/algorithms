/**
 * ref: https://leetcode.com/problems/flatten-nested-list-iterator/
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */

var helper = (nestedList, arr, index = 0) => {
    if (!nestedList || !nestedList[index]) retrn;
    if (nestedList[index].isInteger()) {
        arr.push(nestedList[index].getInteger());
    }
    else {
        helper(nestedList[index].getList(), arr, 0);
    }
    helper(nestedList, arr, index + 1)
    
}
var NestedIterator = function(nestedList) {
    this.nestedList = nestedList;
    this.index = 0;
    this.arr = [];
    helper(nestedList, this.arr);
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.arr[index] !== undefined;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.arr[this.index++];
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/u
