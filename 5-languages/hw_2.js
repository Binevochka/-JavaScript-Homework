let lang = prompt('Выберите язык: EN, RU, DE, JP, CHT');

switch (lang) {
    case 'EN':
        console.log('Hello!');
        break;
    case 'RU':
        console.log('Привет!');
        break;
    case 'DE':
        console.log('Guten tag!');
        break;
    case 'JP':
        console.log('こんにちは！');
        break;
    case 'CHT':
        console.log('你好!');
        break;
    default:
        console.log('Язык не поддерживается!');
        break;
}