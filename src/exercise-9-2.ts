export function replaceDialogueQuotes(text: string): string {
  return text.replace(/(^|\W)'|'(\W|$)/g, "$1\"$2");
}

let text = "'I'm the cook,' he said, 'it's my job.'";
console.log(replaceDialogueQuotes(text)); 