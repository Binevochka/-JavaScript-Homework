function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Пожалуйста, введите оба числа.');
        return;
    }

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                alert('Деление на ноль невозможно.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    document.getElementById('result').textContent = `Результат: ${result}`;

    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}
