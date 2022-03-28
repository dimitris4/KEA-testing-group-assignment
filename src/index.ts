import * as readline from "readline";
import { generateAddress } from "./generateMethods/generateAddress";
import { generatePhoneNumber } from "./generateMethods/generatePhoneNumber";
import { generateNameAndGender } from "./generateMethods/generateNameAndGender";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const main = async () => {
  rl.question(
    "***********************************************\n" +
      "***********************************************\n" +
      "What do you want to generate?\nEnter a number between 1 and 9 and press enter.\n" +
      "[1] A fake CPR\n" +
      "[2] A fake full name and gender\n" +
      "[3] A fake full name, gender and date of birth\n" +
      "[4] A fake CPR, full name and gender\n" +
      "[5] A fake CPR, full name, gender and date of birth\n" +
      "[6] A fake address\n" +
      "[7] A fake mobile phone number\n" +
      "[8] All information for a fake person (CPR, full name, gender, date of birth, address, mobile phone number)\n" +
      "[9] Fake person information in bulk (all information for 2 to 100 persons)\nAnswer: ",
    async (answer) => {
      switch (answer) {
        case "1": {
          // const dateOfBirth = generateDateOfBirth();
          // console.log(generateCPR(null, dateOfBirth));
          break;
        }
        case "2": {
          console.log(generateNameAndGender());
          break;
        }
        case "3": {
          // const fullNameAndGender =  generateNameAndGender();
          // const dateOfBirth = generateDateOfBirth();
          // console.log();
          break;
        }
        case "4": {
          // const person = generateNameAndGender();
          // const dateOfBirth = generateDateOfBirth();
          // const cpr = generateCPR(person, dateOfBirth);
          // console.log();
          break;
        }
        case "5": {
          // const person = generateNameAndGender();
          // const dateOfBirth = generateDateOfBirth();
          // const cpr = generateCPR(person, dateOfBirth);
          // console.log();
          break;
        }
        case "6": {
          const result = await generateAddress();
          console.log(result);
          process.exit();
          break;
        }
        case "7": {
          console.log(generatePhoneNumber(null));
          break;
        }
        case "8": {
          // const person = generateNameAndGender();
          // const dateOfBirth = generateDateOfBirth();
          // const cpr = generateCPR(person, dateOfBirth);
          // const mobileNumber = generateMobilePhoneNumber();
          // const address = generateAddress();
          // console.log();
          break;
        }
        case "9": {
          rl.question(
            "How many persons?\nEnter a number between 2 and 100.\nAnswer: ",
            function (answer) {
              // checks if the answer is number between 2 and 100
              !answer.match(/\d{2,100}/g) && rl.close();

              // prints number of persons...
              for (let i = 0; i < parseInt(answer); i++) {
                // const person = generateNameAndGender();
                // const dateOfBirth = generateDateOfBirth();
                // const cpr = generateCPR(person, dateOfBirth);
                // const mobileNumber = generateMobilePhoneNumber();
                // const address = generateAddress();
                // console.log();
              }

              // closes the connection
              rl.close();
            }
          );
          break;
        }
      }

      // hack to keep connection open if the user needs to enter second answer
      answer !== "9" && rl.close();
    }
  );
};

main();
