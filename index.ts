import { generateCPR } from './src/generateCPR';

console.log('Welcome to my app!');

const fakeCPR = generateCPR({firstName:'', lastName:'', gender:'M'}, new Date(2022, 1, 1));

console.log('fakeCPR = ', fakeCPR);

