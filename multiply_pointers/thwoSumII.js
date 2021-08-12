// Решается с помощью шаблона с несколькими указателями
// Один указатель идет сначала, другой с конца. Если сумма < target
// То увеличиваем левый указатель, в противном случае уменьшаем правый
// Возвращаем позиции слагаемых (от 1 до длины массива)


 var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    let sum;
    while (left < right) {
        sum = numbers[left] + numbers[right];
        
        if (sum === target) {
          return [left+1, right+1];  
        } else if (sum > target) {
            right--;
        } else {
            left++
        }
    }
};