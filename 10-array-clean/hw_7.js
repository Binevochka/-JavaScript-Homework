const inverseFilter = (removeFunction, array) => {
  const filteredArray = [];
  for (const element of array) {
    if (!removeFunction(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

const removeGreaterThan = (limit) => {
  return (x) => x > limit;
};

const limit = parseInt(prompt('Введите предел: '));
const array = prompt('Введите массив чисел, разделённых пробелами: ').split(' ').map(Number);

const filteredArray = inverseFilter(removeGreaterThan(limit), array);
console.log('Отфильтрованный массив:', filteredArray);