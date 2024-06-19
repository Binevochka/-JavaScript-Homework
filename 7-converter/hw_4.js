function convertCur(amount, firstCur, endCur) {
    switch (true) {
        case firstCur === 'RUB':
            if (endCur === '$') {
                return `${amount} RUB = ${amount * 0.011} $`;
            } else if ((endCur === 'EUR') || (endCur === 'USD')) {
                return `${amount} RUB = ${amount * 0.0100} EUR`;
            } else if (endCur === 'JPY') {
                return `${amount} RUB = ${amount * 1.67} JPY`;
            }

        case firstCur === '$':
            if (endCur === 'RUB') {
                return `${amount} $ = ${amount * 98.97} RUB`; 
            } else if ((endCur === 'EUR') || (endCur === 'USD')) {
                return `${amount} $ = ${amount * 0.93} EUR`;
            } else if (endCur === 'JPY') {
                return `${amount} $ = ${amount * 155.68} JPY`;
            }

        case firstCur === 'EUR' || firstCur === 'USD':
            if (endCur === 'RUB') {
                return `${amount} EUR = ${amount * 98.97} RUB`;
            } else if (endCur === '$') {
                return `${amount} EUR = ${amount * 1.07} $`;
            } else if (endCur === 'JPY') {
                return `${amount} EUR = ${amount * 166.97} JPY`;
            }

        case firstCur === 'JPY':
            if (endCur === 'RUB') {
                return `${amount} JPY = ${amount * 0.59} RUB`;
            } else if (endCur === '$') {
                return `${amount} JPY = ${amount * 0.0064} $`;
            } else if ((endCur === 'EUR') || (endCur === 'USD')) {
                return `${amount} JPY = ${amount * 0.0060} EUR`;
            }
        
        default:
            return 0;
    }
}

console.log(convertCur(140000, 'JPY', 'USD'));