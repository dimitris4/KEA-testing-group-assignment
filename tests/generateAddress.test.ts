import { generateAddress } from "../src/generateMethods/generateAddress";
import * as MySQLConnector from '../src/utils/mysql.connector';

afterAll(() => {
  MySQLConnector.end();
});

test('Test db connection', async () => {
  const g = await generateAddress();
  return expect(typeof g).toBe('string');
});