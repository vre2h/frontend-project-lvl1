/**
 * returns random elem between min and max
 * @param {*} min
 * @param {*} max
 * @returns {number} between min and max
 */
const getRandomNumber = (min = 0, max = 10) => Math.floor(
  Math.random() * ((max + 1) - min) + min,
);

export default getRandomNumber;
