// prettier-ignore
export default ({
  startNumber, size, diff, numberOfSkippedElem,
}) => {
  let expected = 0;
  let progression = '';

  for (let num = startNumber, i = 0; i < size; num += diff, i += 1) {
    if (i === numberOfSkippedElem) {
      expected = num;
      progression = `${progression} .. `;
    } else {
      progression = `${progression} ${num} `;
    }
  }

  return { expected, progression };
};
