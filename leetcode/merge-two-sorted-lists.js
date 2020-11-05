/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * link: https://leetcode.com/problems/a/submissions/
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var helper = (l1, l2) => {
    var newNode = null;
    var node;
    if (!l1 && !l2) return null;
    if (!l1 && l2) {
        node = helper(l1, l2.next);
        newNode = new ListNode(l2.val);
        newNode.next = node;
    }
    else if (l1 && !l2) {
        node = helper(l1.next, l2);
        newNode = new ListNode(l1.val);
        newNode.next = node;
    }
    else {
        if (l1.val <= l2.val) { 
            node = helper(l1.next, l2);
            newNode = new ListNode(l1.val);
            newNode.next = node;
        } else {
            node = helper(l1, l2.next);
            newNode = new ListNode(l2.val);
            newNode.next = node;
        }
    }
    
    return newNode;
}

var mergeTwoLists = function(l1, l2) {
    var result = helper(l1, l2);
    return result;
};
