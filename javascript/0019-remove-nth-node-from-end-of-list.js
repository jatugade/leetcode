/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//Space: O(1) : 39.8mb
let removeNthFromEnd = function(head, n) {
    let first = head;
    let second = head;
    let gap = n;

    while (gap > 0 && second) {
        second = second.next;
        gap--;
    }

    while (second && second.next) {
        second = second.next;
        first = first.next;
    }

    if (second === null) {
        head = head.next;
    } else {
        first.next = first.next.next;
    }

    return head;
};


//Time: O(n) : 84ms
//Space: O(1) : 40.2mb
let removeNthFromEnd2 = function(head, n) {
    let counter = 1;
    let current = head;
    while (current.next) {
        current = current.next;
        counter++;
    }

    current = head;
    counter = counter - n;
    if(counter === 0) {
        head = head.next;
        return head;
    }

    while (counter > 1 && current) {
        current = current.next;
        counter--;
    }

    current.next = current.next.next;
    return head;
};
