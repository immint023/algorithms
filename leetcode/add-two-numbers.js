/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

var addTwoNumbers = function(l1, l2) {
    var helper = (list1, list2) => {
        if (!list1 && !list2) return null;
        var list1Value = list1 ? list1.val : 0;
        var list2Value = list2 ? list2.val : 0;
        
        var number = (list1Value + list2Value || 0) % 10;
        var surplus = parseInt((list1Value + list2Value) / 10);
        
        if (surplus != 0) {
            if (list2.next) list2.next.val = list2.next.val + surplus;
            else list2.next = new ListNode(surplus);
        }
        
        var newNode = new ListNode(number);
        
        newNode.next = helper(lst1 && list1.next, list2 && list2.next);
        return newNode;
    }
    return helper(l1, l2, null);
};i
