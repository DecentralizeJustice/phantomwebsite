import _sodium from 'libsodium-wrappers';
// const base64url = require('base64url')
import words from './bip39Wordlist.txt?raw'



async function getRandomInt (exclusiveMax) {
  await _sodium.ready
  const sodium = _sodium
  // The min is 0 (inclusive) and the max is exclusive
  return sodium.randombytes_uniform(exclusiveMax)
}
function numberArrayToWordArray (numberArray) {
  const wordList = words.split(/\r?\n|\r|\n/g)
  const wordArray = []
  const length = numberArray.length
  for (var i=0;i<length; i++) {
    wordArray.push(wordList[numberArray[i]])
  }
  return wordArray
}
export { getRandomInt, numberArrayToWordArray }