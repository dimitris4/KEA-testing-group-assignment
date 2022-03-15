import { Person } from '../src/models/Person';
import { generateRandomEvenNumberBetweenRange, generateRandomOddNumberBetweenRange, padZeros } from './utils/generateRandomNumberBetweenRange';

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
    let last4Digits = person?.gender === 'M' ? generateRandomOddNumberBetweenRange(0, 9999) : generateRandomEvenNumberBetweenRange(0, 9999);
    return `${finalDate.replaceAll('/','')}-${padZeros(last4Digits, 4)}`;
};