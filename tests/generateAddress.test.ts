import { generateAddress } from "../src/generateMethods/generateAddress";

describe("Streetname Generation testing", () => {
  test("A string is returned", async () => {
    const testStreet = await generateAddress();
    return expect(testStreet.street).toEqual(expect.any(String));
  });
  test("None of the characters are numbers", async () => {
    const testStreet = await generateAddress();
    return expect(testStreet.street).not.toMatch(/^[0-9]+$/);
  });
  test("Length of the string is 30", async () => {
    const testStreet = await generateAddress();
    return expect(testStreet.street).toHaveLength(30);
  });
  test("Length of the string is not 0", async () => {
    const testStreet = await generateAddress();
    return expect(testStreet.street).not.toHaveLength(0);
  });
});

describe("Street Number generation testing", () => {
  test("The street number is not 0", async () => {
    const testStreetNumber = await generateAddress();
    expect(testStreetNumber.streetNumber).not.toEqual(0);
  });
  test("The street number is not 1000", async () => {
    const testStreetNumber = await generateAddress();
    expect(testStreetNumber.streetNumber).not.toEqual(1000);
  });
  test("The street number is below or equal to 999", async () => {
    const testStreetNumber = await generateAddress();
    expect(testStreetNumber.streetNumber).toBeLessThanOrEqual(999);
  });
  test("The street number is greater or equal to 1", async () => {
    const testStreetNumber = await generateAddress();
    expect(testStreetNumber.streetNumber).toBeGreaterThanOrEqual(1);
  });
});

describe("Floor generation testing", () => {
  test("A string is returned", async () => {
    const testFloor = await generateAddress();
    expect(testFloor.floor).toEqual(expect.any(String));
  });
  test("Floor is either st or a number", async () => {
    let testFloor = await generateAddress();
    expect(testFloor.floor).toMatch(/^st$|^[0-9]+$/);
  });
});

describe("Door generation testing", () => {
  test("Door is a string", async () => {
    const testDoor = await generateAddress();
    expect(testDoor.door).toEqual(expect.any(String));
  });
  test("Door length is not 0", async () => {
    const testDoor = await generateAddress();
    expect(testDoor.door).not.toHaveLength(0);
  });
  test("Side of Door is a string with non-numeric characters", async () => {
    const testDoor = await generateAddress();
    const [sideOfDoor, numberOfDoor] = testDoor.door.split(" ");
    expect(sideOfDoor).not.toMatch(/^[0-9]+$/);
  });
  test("Side of Door is a either th,mf or tv", async () => {
    const testDoor = await generateAddress();
    const [sideOfDoor, numberOfDoor] = testDoor.door.split(" ");
    expect(sideOfDoor).toMatch(/^th|mf|tv$/);
  });
  test("Number of door is a string with only numeric characters", async () => {
    const testDoor = await generateAddress();
    const [sideOfDoor, numberOfDoor] = testDoor.door.split(" ");
    expect(numberOfDoor).toMatch(/^[0-9]+$/);
  });
  test("Number of door is below or equal to 50", async () => {
    const testDoor = await generateAddress();
    const [sideOfDoor, numberOfDoor] = testDoor.door.split(" ");
    expect(parseInt(numberOfDoor)).toBeLessThanOrEqual(50);
  });
  test("Number of door is greater or equal to 1", async () => {
    const testDoor = await generateAddress();
    const [sideOfDoor, numberOfDoor] = testDoor.door.split(" ");
    expect(parseInt(numberOfDoor)).toBeGreaterThanOrEqual(1);
  });
  test("Number of door is not 0", async () => {
    const testDoor = await generateAddress();
    const [sideOfDoor, numberOfDoor] = testDoor.door.split(" ");
    expect(parseInt(numberOfDoor)).not.toBe(0);
  });
  test("Number of door is not 51", async () => {
    const testDoor = await generateAddress();
    const [sideOfDoor, numberOfDoor] = testDoor.door.split(" ");
    expect(parseInt(numberOfDoor)).not.toBe(51);
  });
});

describe("Postal code and Town testing", () => {
  test("Town is a string", async () => {
    const testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.town).toEqual(expect.any(String));
  });
  test("Town is composed only of letters", async () => {
    const testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.town).not.toMatch(/^[0-9]+$/);
  });
  test("Town length is equal or lesser than 20", async () => {
    const testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.town.length).toBeLessThanOrEqual(
      20
    );
  });
  test("Town is length is not 0", async () => {
    const testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.town).not.toHaveLength(0);
  });
  test("Town is length is not 0", async () => {
    const testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.town).not.toHaveLength(21);
  });
  test("Town is length is greater than 1", async () => {
    const testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.town.length).toBeGreaterThanOrEqual(
      1
    );
  });
  test("Postal Code is a string type", async () => {
    const testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.postalCode).toEqual(
      expect.any(String)
    );
  });
  test("Postal Code is composed only of numbers", async () => {
    const testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.postalCode).toMatch(/^[0-9]+$/);
  });
  test("Postal Code is lesser than or equal to a 9990", async () => {
    const testPostalCode = await generateAddress();
    return expect(parseInt(testPostalCode.postalCode.postalCode)).toBeLessThan(
      9990
    );
  });
  test("Postal Code is not 9991", async () => {
    const testPostalCode = await generateAddress();
    return expect(parseInt(testPostalCode.postalCode.postalCode)).not.toBe(
      9991
    );
  });
  test("Postal Code is greater than or equal to a 1301", async () => {
    const testPostalCode = await generateAddress();
    return expect(
      parseInt(testPostalCode.postalCode.postalCode)
    ).toBeGreaterThanOrEqual(1301);
  });
  test("Postal Code is not 1300", async () => {
    const testPostalCode = await generateAddress();
    return expect(parseInt(testPostalCode.postalCode.postalCode)).not.toBe(
      1300
    );
  });
  test("Postal Code length is be equal or less than 4", async () => {
    const testPostalCode = await generateAddress();
    return expect(
      testPostalCode.postalCode.postalCode.length
    ).toBeLessThanOrEqual(4);
  });
  test("Postal Code length is equal or greater than 1", async () => {
    const testPostalCode = await generateAddress();
    return expect(
      testPostalCode.postalCode.postalCode.length
    ).toBeGreaterThanOrEqual(1);
  });
  test("Postal Code length is not 0", async () => {
    const testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.postalCode).not.toHaveLength(0);
  });
  test("Postal Code length is not 5", async () => {
    const testPostalCode = await generateAddress();
    return expect(testPostalCode.postalCode.postalCode).not.toHaveLength(5);
  });
});
