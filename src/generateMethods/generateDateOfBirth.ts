export const generateDateOfBirth = () => {
    var test = getRandomNumber(1, 31);
    var day = ('0' + getRandomNumber(1, 31)).slice(-2);
    var month = ('0' + getRandomNumber(1, 13)).slice(-2);
    var year = ('0' + getRandomNumber(0, 99)).slice(-2);
    return day + month + year;
}

function getRandomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
}
