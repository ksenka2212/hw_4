// N.2 Домашнее задание TREESUM
// 1. Разработать «чистую» функцию treeSum, которая получает массив, 
//элементы которого могут быть числами или снова массивами, и так до любого уровня.
// Функция должна рассчитать и вернуть сумму всех числовых элементов массива со всех уровней.
// При написании функции не описывать каких-либо вложенных в неё функций.

let arrayNumbers = [ 5, 7, 
    [ 4, [2], 8, [1,3], 2 ], 
    [ 9, [] ], 
    1, 8
  ]; 
  
  function treeSum(array) {
    let sum = 0;
  
    do {
      let newArray = [];
      for (let val of array) {
        if (typeof val === "number") sum += val;
        else newArray = newArray.concat(val);
      }
      array = newArray;
    } while (array.length > 0);
  
    return sum;
  }
  
  console.log(treeSum(arrayNumbers));


       
// 2. Создайте функцию, которая принимает число как строку n и возвращает число без конечных и стартовых нулей.
// Конечные нули - это нули после десятичной точки, которые не влияют на значение (например, последние три нуля в 6.7000 и 6.07000).
// Стартовые нули - это нули перед целым числом, которые не влияют на значение (например, первые три нуля в 000427 и 000930).

// removeLeadingTrailing("190.000") ➞ "190"
// removeLeadingTrailing("00803") ➞ "803"
// removeLeadingTrailing("07.1200") ➞ "7.12"
// removeLeadingTrailing("90") ➞ "90"

//Вернуть строку.
//Если вы получаете число с .0 в конце, верните целочисленное значение (например, верните «4», а не «4,0»).
//Если число 0, 0,0, 000, 00,00 и т. Д. ... верните «0».


    function removeLeadingTrailing(n) {  
    let num = parseFloat(n);  
    console.log(num);
     
} 

removeLeadingTrailing("190.000");
removeLeadingTrailing("00803");
removeLeadingTrailing("07.1200");
removeLeadingTrailing("90");


