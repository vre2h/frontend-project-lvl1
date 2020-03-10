/**
 * returns random elem between min and max
 * @param {number} min
 * @param {number} max
 */
// prettier-ignore
const getRandomSegment = (min = 0, max = 10) => Math.floor(
  Math.random() * (max - min) + min,
);

/**
 * returns elem before max
 * @param {number} max
 */
const getRandomBefore = (max) => Math.floor(Math.random() * max);

export { getRandomSegment, getRandomBefore };
