import { Person } from '../src/models/Person';
import { generateRandomNumberBetweenRange } from './utils/generateRandomNumberBetweenRange';

export const generateCPR = (person: Person | null, dateOfBirth: Date) => {
    let personToGetCPR: Person;
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
    return `${finalDate.replaceAll('/','')}-${generateRandomNumberBetweenRange(100, 999)}${personToGetCPR.gender === 'M' ? 1 : 2}`;
};