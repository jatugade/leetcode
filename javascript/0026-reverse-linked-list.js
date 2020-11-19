/**
 * https://leetcode.com/problems/reverse-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
// Time: O(n) - 76ms
// Space: O(1) - 40.5mb
let reverseList = function(head) {
    let current = head;
    let prev = null;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};


//Time: O(n) - 92ms
//Space: O(n) - 40.8mb
let reverseList2 = function(head) {
    return reverseHelper(null, head);
};

function reverseHelper(prev, current) {
    if (current === null) {
        return null;
    }
    if (current.next === null) {
        current.next = prev;
        return current;
    }
    let next = current.next;
    current.next = prev;
    prev = current;
    return reverseHelper(prev, next);
}
