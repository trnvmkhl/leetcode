// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

// Пока в списке есть значения сравниваем val ноды с val следующей ноды
// Если совпадают, то next нынешней ноды заменяем на ноду через одну
// Делаем шаг вперед
// Возвращаем список


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    
    if (!head) return head
    let current = head;
    
    while (current){
        
        if (!current.next) break;
        
        if (current.val === current.next.val) {
            current.next = current.next.next;
           } else {
            current = current.next;
                
        }
        
    }
    return head
};