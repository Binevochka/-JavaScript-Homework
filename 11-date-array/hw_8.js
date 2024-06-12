function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function isValidDate(day, month, year) {
    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return month >= 1 && month <= 12 && day >= 1 && day <= daysInMonth[month - 1];
}

function formatNumber(number, length) {
    let str = number + '';
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

function parseDate(dateStr) {
    let day, month, year;

    if (dateStr.includes('.')) {
        [day, month, year] = dateStr.split('.').map(Number);
    } else if (dateStr.includes('/')) {
        [month, day, year] = dateStr.split('/').map(Number);
    } else {
        return null;
    }

    if (year < 100) {
        year += year < 50 ? 2000 : 1900;
    } else {
        return null;
    }

    if (isValidDate(day, month, year)) {
        return new Date(year, month - 1, day); // Создаем объект Date
    } else {
        return null;
    }
}

function filterAndFormatDates(dateArray) {
    let validDates = dateArray.map(parseDate).filter(date => date !== null);
    validDates.sort((a, b) => a - b);
    return validDates.map(date => 
        `${formatNumber(date.getDate(), 2)}.${formatNumber(date.getMonth() + 1, 2)}.${date.getFullYear()}`
    );
}

function getUserInput() {
    const numberOfDates = parseInt(prompt('Введите количество дат: '));
    const dates = [];
    
    for (let i = 0; i < numberOfDates; i++) {
        const dateStr = prompt(`Введите дату ${i + 1}: `);
        dates.push(dateStr);
    }
    
    return dates;
}

const inputDates = getUserInput();
const validDates = filterAndFormatDates(inputDates);

console.log(validDates);