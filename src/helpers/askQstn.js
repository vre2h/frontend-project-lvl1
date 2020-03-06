import readlineSync from 'readline-sync';

/**
 * Simple function which is asking user given question and returns response
 * @param {string} qstn - qstn that readlineSync going to ask
 * @returns {string} answer that user typed
 */
export default (qstn) => readlineSync.question(qstn);
