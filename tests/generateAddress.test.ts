import {generateAddress} from "../src/generateMethods/generateAddress";
import * as MySQLConnector from '../src/utils/mysql.connector';

afterAll(() => {
  console.debug("After all tests kill the connection");
  return MySQLConnector.end();
});
describe("Streetname Generation testing",()=>{
    test("A string is returned",async()=>{
        let testStreet = await generateAddress();
        return expect(testStreet.street).toEqual(expect.any(String))
    })
    test("None of the characters are numbers",async()=>{
        let testStreet = await generateAddress();
        return expect(testStreet.street).not.toMatch(/^[0-9]+$/);
    })
    test("Length of the string is 30",async()=>{
        let testStreet =  await generateAddress();
        return expect(testStreet.street).toHaveLength(30);
    })
    test("Length of the string is not 0",async()=>{
        let testStreet =  await generateAddress();
        return expect(testStreet.street).not.toHaveLength(0);
    })

})

describe("Street Number generation testing",()=>{
    
    test("The street number is not 0",async()=>{
        let testStreetNumber = await generateAddress();
        expect(testStreetNumber.streetNumber).not.toEqual(0);
    });
      
    test("The street number is not 1000",async()=>{
        let testStreetNumber = await generateAddress();
        expect(testStreetNumber.streetNumber).not.toEqual(1000);
    });
      
    test("The street number is below or equal to 999",async ()=>{
        let testStreetNumber = await generateAddress();
        expect(testStreetNumber.streetNumber).toBeLessThanOrEqual(999);
    });
    test("The street number is greater or equal to 1",async()=>{
      let testStreetNumber = await generateAddress();
        expect(testStreetNumber.streetNumber).toBeGreaterThanOrEqual(1);
    });
})

describe("Floor generation testing",()=>{
  test("A string is returned",async()=>{
    let testFloor= await generateAddress();
    expect(testFloor.floor).toEqual(expect.any(String));
  })
  test("Floor is either st or a number",async()=>{
    let testFloor= await generateAddress();
    expect(testFloor.floor).toMatch(/^st$|^[0-9]+$/);
  })
})

describe("Door generation testing",()=>{
    test("Door is a string",async()=>{
      let testDoor = await generateAddress();
      expect(testDoor.door).toEqual(expect.any(String));
    });
    test("Door length is not 0",async()=>{
      let testDoor = await generateAddress();
      expect(testDoor.door).not.toHaveLength(0);
    });
    test("Side of Door is a string with non-numeric characters",async()=>{
      let testDoor = await generateAddress();
      let [sideOfDoor,numberOfDoor]= testDoor.door.split(" ");
      expect(sideOfDoor).not.toMatch(/^[0-9]+$/);
    })
    test("Side of Door is a either th,mf or tv",async()=>{
      let testDoor = await generateAddress();
      let [sideOfDoor,numberOfDoor]= testDoor.door.split(" ");
      expect(sideOfDoor).toMatch(/^th|mf|tv$/);
    })
    test("Number of door is a string with only numeric characters",async()=>{
      let testDoor = await generateAddress();
      let [sideOfDoor,numberOfDoor]= testDoor.door.split(" ");
      expect(numberOfDoor).toMatch(/^[0-9]+$/);
    })
    test("Number of door is below or equal to 50",async()=>{
      let testDoor = await generateAddress();
      let [sideOfDoor,numberOfDoor]= testDoor.door.split(" ");
      expect(parseInt(numberOfDoor)).toBeLessThanOrEqual(50);
    })
    test("Number of door is greater or equal to 1",async()=>{
      let testDoor = await generateAddress();
      let [sideOfDoor,numberOfDoor]= testDoor.door.split(" ");
      expect(parseInt(numberOfDoor)).toBeGreaterThanOrEqual(1);
    })
})

describe("Postal code and Town testing", () =>{

  test("Town is a string",async()=>{
    let testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.town).toEqual(expect.any(String));
  })
  test("Town is composed only of letters",async()=>{
    let testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.town).not.toMatch(/[0-9]+/);
  });
  test("Town length is equal or lesser than 20",async()=>{
    let testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.town.length).toBeLessThanOrEqual(20);
  });
  test("Town is length is not 0",async()=>{
    let testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.town).not.toHaveLength(0);
  });
  test("Postal Code is a string type",async()=>{
    let testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.postalCode).toEqual(expect.any(String));
  })
  test("Postal Code is composed only of numbers",async()=>{
    let testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.postalCode).toMatch(/[0-9]+/);
  });
  test("Postal Code is lesser than or equal to a 9990",async()=>{
    let testPostalCode = await generateAddress();
    return expect(parseInt(testPostalCode.postalCode.postalCode)).toBeLessThan(9990);
  });
  test("Postal Code is greater than or equal to a 1301",async()=>{
    let testPostalCode = await generateAddress();
    return expect(parseInt(testPostalCode.postalCode.postalCode)).toBeGreaterThanOrEqual(1301);
  });
  test("Postal Code length is 4",async()=>{
    let testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.postalCode).toHaveLength(4);
  });
  test("Postal Code length is not 0",async()=>{
    let testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.postalCode).not.toHaveLength(0);
  });
})