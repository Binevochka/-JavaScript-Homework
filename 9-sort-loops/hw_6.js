function bubbleSort(arr, order) {
    if (arr.length === 0 || (order !== 'asc' && order !== 'desc')) {
        return 'Сортировка невозможна!';
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if ((order === 'asc' && arr[j] > arr[j + 1]) || (order === 'desc' && arr[j] < arr[j + 1])) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let array = [1, 40, -5, 10, 0];
console.log('По возрастанию: ', bubbleSort(array, 'asc'));
console.log('По убыванию: ', bubbleSort(array, 'desc'));

console.log(bubbleSort(array, 'none')); // Пример ошибки