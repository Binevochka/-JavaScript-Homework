function correctCardNumber(num) {
    const correctNum = num.replace(/\D/g, '');

    if (correctNum.length !== 16) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < correctNum.length; i++) {
        let digit = parseInt(correctNum[i], 10);

        if (i % 2 === 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    return sum % 10 === 0;
}

function UserInput() {
    const cardNumber = prompt('Введите номер карты');
    return cardNumber;
}

const userCardNumber = UserInput();
const Correct = correctCardNumber(userCardNumber);
console.log(`Номер карты ${userCardNumber} ${Correct ? 'корректен' : 'некорректен'}`);