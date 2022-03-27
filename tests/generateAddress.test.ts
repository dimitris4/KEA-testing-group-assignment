import { generateAddress } from "../src/generateMethods/generateAddress";
import * as MySQLConnector from '../src/utils/mysql.connector';

afterAll(() => {
  MySQLConnector.end();
});

test('Test db connection', () => {
    return expect(generateAddress()).resolves.toBe('asdasdasd');
  });