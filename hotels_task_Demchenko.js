//task 1; time: <5 min
const cityArr = ['Москва', 'Санкт-Петербург', 'Воронеж'];

function joinArr(arr) {
  //можно использовать конкатенацию, но этот способ короче и изящнее
  return `"${arr.join(',')}."`;
}

console.log(joinArr(cityArr));

//task2; time: <5 min
function roundToFive(num) {
  //в условии прописано возвращать округление до пятерок => отрабатываем ситуацию для чисел меньше 2.5, иначе будет возвращен 0. Также функция может принимать на в качестве аргумента число, переданное как строка.
  if (num < 2.5) return 5;
  return (num % 5 > 2.5) ? Math.ceil(num / 5) * 5 : Math.round(num / 5) * 5;
}

console.log(roundToFive("2.3"));


//task 3; time ~ 20min;
function computers(num) {
  //уверен, что можно было бы написать регулярное выражение лучше, но умею пока что только так. Не использовал конструкцию switch case, т.к. не разобрался как использовать с ней метод match
  if (String(num).match(/[1][0-9]|[2-9][0]$/g)) {
    //Если последние 2 символа 10-19 или 20, 30, 40 ...
    return `${num} компьютеров`
  } else if (String(num).match(/[1]$/g)) {
    //Если последний символ 1
    return `${num} компьютер`
  }
  else {
    return `${num} компьетра`
  }
}

console.log(computers(111))

//task 4; time ~ 10min
function isSimple(num) {
  //Не вводил проверку является ли числом или отрицательным, в условии не было
  if (num === 1 || num === 2) return true
  for (let i = 2; i < num; i++) {
    return (num % i === 0) ? false : true
  }
}


//task 5; time ~ 10min
const firstArr = [7, 17, 1, 9, 1, 17, 56, 56, 23],
  secondArr = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
const obj = {
  ifInArr: function (arr1, arr2) {
    let arr = [];
    arr1.forEach((item) => {
      if (arr2.includes(item) && !arr.includes(item)) {
        arr.push(item);
      }
    });

    return arr
  }
}

console.log(obj.ifInArr(firstArr, secondArr));

//task 6; time ~ 40min
const tableObj = {
  showMultiplyTable: function (num) {
    //таблица расчитана на вывод значений num до 9, сделано как в примере, при вводе 10 ломаются отступы
    let str = ''
    let firstString = ' '
    // let arr1 = [];
    for (let i = 1; i <= num; i++) {
      //цикл для создания первой строки
      if (i < 10) {
        //2 пробела
        firstString += `  ${i}`
      } else {
        //1 пробел
        firstString += ` ${i}`
      }
    }

    str += firstString + '\n';

    for (let i = 1; i <= num; i++) {
      let newString = `${i}`
      for (let j = 1; j <= num; j++) {
        if (i * j < 10) {
          //2 пробела
          newString += `  ${i * j}`
        } else {
          //1 пробел
          newString += ` ${i * j}`
        }
      }
      str += newString + '\n'
    }

    console.log(str)
  }
}

tableObj.showMultiplyTable(9)



