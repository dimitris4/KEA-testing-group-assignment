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
    const month = dateOfBirth.getMonth();
    const date = dateOfBirth.getDate();
    const year = dateOfBirth.getFullYear();
    return `${date}${month}${year}-${generateRandomNumberBetweenRange(100, 999)}${personToGetCPR.gender === 'M' ? 1 : 2}`;
}