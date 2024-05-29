const hasLicence = true;
const age = 19;
const isDrunk = false;

const canDrive = hasLicence && age > 18 && !isDrunk;
console.log(`Может водить машину? ${canDrive ? 'Может' : 'Не может'}`);