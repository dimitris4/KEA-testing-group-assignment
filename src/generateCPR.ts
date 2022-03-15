import { Person } from '../src/models/Person';
import { generateRandomEvenNumber, generateRandomOddNumber, padZeros } from './utils/generateRandomNumberBetweenRange';

export const generateCPR = (person: Person | null, dateOfBirth: Date) => {
    let personToGetCPR: Person;
    // the following logic is stupid, 
    // but I did it because it is a requirement to
    // generate CPRs even without a person...
    if (person === null) {
        personToGetCPR = {
            firstName: '',
            lastName: '',
            gender: (Date.now() % 2) == 1 ? 'M' : 'F',
        }
    } else {
        personToGetCPR = person;
    };

    const finalDate = dateOfBirth.toLocaleDateString("en-GB", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
    });    
    let randomNumber = personToGetCPR.gender === 'M' ? generateRandomOddNumber(0, 9999) : generateRandomEvenNumber(0, 9999);
    return `${finalDate.replaceAll('/','')}-${padZeros(randomNumber, 4)}`;
};