/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * ref: https://leetcode.com/problems/remove-nth-node-from-end-of-list
 */
var removeNthFromEnd = function(head, n) {
    
    const helper = (node) => {
        if (!node) return {
            node,
            count: 1,
        };
        const { node: nextNode, count } = helper(node.next);
        if (count === n) {
            return {
                node: nextNode,
                count: count + 1,
            }
        }
        node.next = nextNode;
        return {
            node,
            count: count + 1,
        };
    }
    
    return helper(head).node;
};

