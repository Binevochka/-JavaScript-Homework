function objectToQueryString(params) {
    return Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

function getUserInput() {
    const params = {};
    const numberOfParams = parseInt(prompt('Введите количество компонентов запроса:'));
    
    for (let i = 0; i < numberOfParams; i++) {
        const key = prompt(`Введите ключ компонента запроса ${i + 1}: `);
        const value = prompt(`Введите значение компонента запроса ${i + 1}: `);
        params[key] = value;
    }
    return params;
}

const userInputParams = getUserInput();
const queryString = objectToQueryString(userInputParams);

console.log(queryString);