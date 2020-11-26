/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/linked-list-cycle/
 * @param {ListNode} head
 * @return {boolean}
 */

//Time: O(n) - 84ms
//Space: O(1) - 40.3mb
let hasCycle = function(head) {
    if (head === null) {
        return false;
    }
    let first = head;
    let second = head.next;
    while (second) {
        if (first === second) {
            return true;
        }
        if (second.next && second.next.next) {
            first = first.next;
            second = second.next.next;
        } else {
            return false;
        }

    }
    return false;
};


//Time: O(n) - 88ms
//Space: O(n) - 41.2mb
let hasCycle2 = function(head) {
    let s = new Set();
    let current = head;
    while (current) {
        if (s.has(current)) {
            return true;
        }
        s.add(current);
        current = current.next;
    }
    return false;
};