import { generateRandomNumber } from '../utils/generateRandomNumberBetweenRange';
import * as personsFile from '../../person-names.json';

export const generateNameAndGender = () => {
    const personsList = personsFile.persons
    const personIndex = generateRandomNumber(0,personsList.length-1)
    const randomPerson = personsList[personIndex]
    const randomPersonFirstName = randomPerson.name.toString()
    const randomPersonLastName = randomPerson.surname.toString()
    const randomPersonGender = randomPerson.gender.toString()
    return `FirstName: ${randomPersonFirstName},\nLastName: ${randomPersonLastName},\nGender: ${randomPersonGender}`
}