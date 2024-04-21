// Задаю значения координат (можно любые, т.к. по теореме Пифагора всё возведётся в квадрат)

const addressLat = 40
const addressLong = 20
const positionLat = 50
const positionLong = 10

// Вычисляю расстояние между адресом назначения и начальным положением

const latDiff = addressLat - positionLat;
const longDiff = addressLong - positionLong;

// Теорема Пифагора (квадрат гипотенузы равен сумме квадратов катетов)

const distance = (latDiff ** 2 + longDiff ** 2) ** (1 / 2); // Можно было использовать корень sqrt, но я решила пока не использовать сторонние функции библиотек
console.log(distance)