function crypto(password) {

    const len = password.length;
    const chars = password.split('');

    const encryptedChars = chars.map((char, index) => {
        if (index === 0) {
            return chars[Math.floor(len / 2)];
        } else if (index === Math.floor(len / 2)) {
            return chars[0];
        } else if (index === 1) {
            return chars[len - 1];
        } else if (index === len - 1) {
            return chars[1];
        } else if (index === 2) {
            return chars[len - 2];
        } else if (index === len - 2) {
            return chars[2];
        } else {
            return char;
        }
    });

    return encryptedChars.join('');
}

function check(encryptedPassword, originalPassword) {
    const decryptedPassword = crypto(encryptedPassword);
    return decryptedPassword === originalPassword;
}

const password1 = 'sun';
const encrypted1 = crypto(password1);
console.log('Зашифрованный пароль:', encrypted1);

const isCorrect1 = check(encrypted1, password1);
console.log('Пароль корректен:', isCorrect1);


const password2 = 'sunrise';
const encrypted2 = crypto(password2);
console.log('Зашифрованный пароль:', encrypted2);

const isCorrect2 = check(encrypted2, password2);
console.log('Пароль корректен:', isCorrect2);