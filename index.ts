import { generateCPR } from './src/generateCPR';

console.log('Welcome to my app!');

const fakeCPR = generateCPR({firstName:'', lastName:'', gender:'M'}, new Date());

console.log('fakeCPR = ', fakeCPR);

