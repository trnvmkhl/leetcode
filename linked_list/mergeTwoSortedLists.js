// https://leetcode.com/problems/merge-two-sorted-lists/

// Пока оба списка имеют значения сравниваем val каждой ноды.
// Меньшее значение кидаем в новый список list.
// Объявляем переменную result со ссылкой на наш list.
// Когда один из списков кончается, просто закидываем в list остатки.
// Возвращаем list.next




 var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    
    let list = new ListNode();
    list.val = null;
    list.next = null;
    let result = list;
    
    
    while (l1 && l2) {
        
        if(l1.val > l2.val){
            result.next = l2;
            l2 = l2.next;
        } else {
            result.next = l1;
            l1 = l1.next  
        } 
        
        result = result.next;
    }
    
    while (l1) {
        result.next = l1;
        l1 = l1.next;
        result = result.next;
    }
    
    while (l2) {
        result.next = l2;
        l2 = l2.next;
        result = result.next;
    }
    
    
    return list.next;
    
};


