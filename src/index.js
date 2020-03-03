import readlineSync from 'readline-sync';

const app = () => {
  console.log('Welcome to the Brain Games! \n');

  const answer = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${answer}!`);
};

export default app;
