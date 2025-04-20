const adlamScript = {
  name: "Adlam",
  ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
  direction: "rtl",
  year: 1987,
  living: true,
  link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
};

function getCharactersFromRanges(ranges) {
  let characters = [];
  for (const [start, end] of ranges) {
    for (let code = start; code <= end; code++) {
      characters.push(String.fromCodePoint(code));
    }
  }
  return characters;
}

const adlamCharacters = getCharactersFromRanges(adlamScript.ranges);
console.log(adlamCharacters.join(' '));