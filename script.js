

//  let числаСОшибками = ['10','Строка','5g','15','05']
//  let нормальныеЧисла = ['10','15','05']
//  function sumArray(arr){
//      let накопитель = 0 
//      for (i = 0; i < 5; i++){
//          let текущееЧисло = Number(arr[i])
//          console.log("Прибавляю ", текущееЧисло)
//          if (isNaN(текущееЧисло) === true) { }
//          else{
//              накопитель = накопитель + текущееЧисло
//          }
//      }
//      console.log(накопитель)

//  }
// sumArray(числаСОшибками)


// let array = [1, 2, 3, 4];
// function changeElem(массив, множитель) {
//     for (let i = 0; i < массив.length; i++) {
//         массив[i] *= множитель;
//     }
//     return массив;
// }
// let result = changeElem(array, 3);
// console.log(result); =============================================2 задание

// let arrray2 = [1,2,3,4,5,6,7,8,9]
// reverseIndex(arrray2)
// function reverseIndex(arrray2){
//     let newArrray2 = []
//     let t = arrray2.length-1
//     for(i=0;i<arrray2.length;i++){
//         newArrray2[i]= arrray2[t]
//         t--  
//     }
// return newArrray2
// }
// console.log(reverseIndex(arrray2))======================================4 задание


// function checkElem(num) {
//     if (num%7==-0) {
//         console.log("Делиться на 7 без остатка")
//     }
//     else {
//         console.log("Не делится на 7");
//     }
// }
// checkElem(21)=====================================1 задание


// function checkElem(array, callback) {
//     // Перебираем каждый элемент массива
//     for (let i = 0; i < array.length; i++) {
//         // Если колбэк-функция возвращает true для текущего элемента
//         if (callback(array[i])) {
//             return true; // Возвращаем true
//         }
//     }
//     return false; // Если ни один элемент не прошел проверку, возвращаем false
// }

// // // Пример использования функции
// // let array = [1, 2, 3, 4];
// // let result = checkElem(array, (elem) => elem == 3);
// // console.log(result); // Вывод: true==========================5 задание

//  let produckt = ['виски','водка','коньяк']
//  let prise = [1400, 3400, 2500]
//  let produckts = [
//     { name: "виски", prise: 1400 },
//     { name: "водка", prise: 3400 },
//     { name: "коньяк", prise: 2500 }
//  ]
//  console.log(produckts)
 

const book = {
    title: 'Война и мир',
    author: 'Лев Толстый',
    pages: 1274,
    isFinished: true,
    usersReading: [1946, 1293, 7743]

}
//delet book.usersReading
if (book.pages > 2000){
    console.log('большая')
} else{
    console.log('маленькая')
}


if(book.isFinished = true) {
    console.log("закончена")
} else {
    console.log("незакончена")
}

console.log(book)

console.log(book.usersReading[1]=2000)

console.log(book.author = 'Достаевский')


book.usersReading[3]=1020
console.log(book.usersReading[3])

const book2 = {
    title: 'Мертвые души',
    author: 'Николай Гоголь',
    pages: 328,
    isFinished: true,
    usersReading: [1867, 1134, 9912]
}
  
let books23 = [book, book2]
let books = [
    {
        title: 'Война и мир',
    author: 'Лев Толстый',
    pages: 1274,
    isFinished: true,
    usersReading: [1946, 1293, 7743]
    },{
        title: 'Мертвые души',
    author: 'Николай Гоголь',
    pages: 328,
    isFinished: true,
    usersReading: [1867, 1134, 9912]
    },{
        title: 'Отцы и дети',
    author: 'Достаевский',
    pages: 876,
    isFinished: true,
    usersReading: [3409, 3561, 6674]
    }
]


let колвоСтр = 0
for (i = 0; i< 3; i++){
    колвоСтр = колвоСтр + books[i].pages
}
console.log(колвоСтр)