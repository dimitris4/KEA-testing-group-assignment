import {generateRandomNumber} from '../utils/generateRandomNumberBetweenRange';
import * as personsFile from '../../person-names.json';
import {Person} from "../models/Person";

export const generateNameAndGender = () => {
    const personsList = personsFile.persons
    const personIndex = generateRandomNumber(0, personsList.length - 1)
    const randomPerson = personsList[personIndex]

    let returnObject: Person = {
        firstName: randomPerson.name.toString(),
        lastName: randomPerson.surname.toString(),
        gender: randomPerson.gender.toString(),
    }

    return returnObject
}