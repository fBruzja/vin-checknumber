const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "Ä",
  "Ö",
  "Ü",
];
const correspondingNumbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  1,
  2,
  3,
  4,
  5,
  0,
  7,
  8,
  9,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  1,
  0,
  4,
];

export function generateCheckNumber(vin) {
  let multiplier = 2;

  const transformedVin = vin
    .split("")
    .map((letter) =>
      letter.match(/[A-ZÄÖÜ]/)
        ? correspondingNumbers[letters.indexOf(letter)]
        : parseInt(letter, 10)
    )
    .reverse()
    .map((item) => {
      if (multiplier === 11) multiplier = 2;
      return item * multiplier++;
    });

  const sum = transformedVin.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  const difference = sum % 11;

  if (difference === 10) {
    return "X";
  }

  return difference.toString();
}
