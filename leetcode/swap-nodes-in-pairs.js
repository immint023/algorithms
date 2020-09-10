/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/submissions/
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function(head) {
    if (!head || !head.next) return head;
    
    var node = head.next;
    
    // swap
    head.next = node.next;
    node.next = head;
    
    node.next.next = swapPairs(node.next.next);
    
    return node;
};

/**
 * {
 *  val: 1,
 *  next: {
 *    val: 2,
 *    next: {
 *      val: 3,
 *      next: {
 *        val: 4,
 *        next: null
 *      }
 *    }
 *  }
 * }
 * */
