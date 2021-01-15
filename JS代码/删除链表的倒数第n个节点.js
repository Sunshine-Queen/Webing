// function ListNode(x) {
//     this.val = x;
//     this.next = null;
// }



function removeNthFromEnd(head, n) {
    // write code here
    var first = head;
    var fast = head;
    while (n > 0) {
        fast = fast.next;
        n--;
    }
    if (!fast) return head.next;
    while (fast.next) {
        fast = fast.next;
        first = first.next;
    }
    first.next = first.next.next;
    return head;
}