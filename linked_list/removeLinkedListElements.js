
// https://leetcode.com/problems/remove-linked-list-elements/

// Пока в списке есть ноды, сравниваем val ноды с искомым
// Если совпадает, то меняем next нынешней ноды на ноду через одну
// И делаем шаг вперед
// Возвращаем список

 var removeElements = function(head, val) {
    
    if (!head) {
        return head;
    }
    
    
    let current = head;
    let prev = null;
    
    while (current) {
        if (current.val === val) {
            if (prev) {
                prev.next = prev.next.next;
            } else {
                head = current.next
            }            
            current = current.next;
        } else {
           prev = current;
            current = current.next  
        }
           
    }
    
    return head
    
};