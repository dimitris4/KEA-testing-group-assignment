export const generateRandomEvenNumberBetweenRange = (min = 0, max = 100) => {
    while (true) {
        // find diff
        let difference = max - min;
        // generate random number 
        let rand = Math.random();
        // multiply with difference 
        rand = Math.floor( rand * difference);
        // add with min value 
        rand = rand + min;
        if (rand % 2 === 0) {
            return rand;
        }
    };
};

export const generateRandomOddNumberBetweenRange = (min = 0, max = 100) => {
    while (true) {
        // find diff
        let difference = max - min;
        // generate random number 
        let rand = Math.random();
        // multiply with difference 
        rand = Math.floor( rand * difference);
        // add with min value 
        rand = rand + min;
        if (rand % 2 !== 0) {
            return rand;
        }
    };
};

export const padZeros = (num: number, size: number) => {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}