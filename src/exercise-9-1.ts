export function verify(regexp: RegExp, yes: string[], no: string[]) {
  if (regexp.source === "...") return;
  for (const str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (const str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}

// Regular expressions
const carAndCat = /(car|cat)/;
const popAndProp = /p(op|rop)/;
const ferretFerryFerrari = /ferr(et|y|ari)/;
const wordEndingInIous = /\b\w+ious\b/;
const whitespaceFollowedByPunctuation = /\s[.,:;]/;
const wordLongerThanSixLetters = /\b\w{7,}\b/;
const wordWithoutLetterE = /\b[^eE\s]+\b/;

// Test cases
verify(carAndCat, ["my car", "bad cats"], ["camper", "high art"]);
verify(popAndProp, ["pop culture", "mad props"], ["plop", "prrrop"]);
verify(ferretFerryFerrari, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);
verify(wordEndingInIous, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);
verify(whitespaceFollowedByPunctuation, ["bad punctuation ."], ["escape the period"]);
verify(wordLongerThanSixLetters, ["Siebentausenddreihundertzweiundzwanzig"], ["no", "three small words"]);
verify(wordWithoutLetterE, ["red platypus", "wobbling nest"], ["earth bed", "bedrøvet abe", "BEET"]);
