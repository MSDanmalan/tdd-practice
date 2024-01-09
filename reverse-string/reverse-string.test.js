import reverseString from './reverse-string'

// Tests from https://github.com/TheOdinProject/javascript-exercises/blob/main/03_reverseString/reverseString.spec.js
describe('reverseString', () => {
    test('reverses single word', () => {
      expect(reverseString('hello')).toEqual('olleh');
    });
  
    test('reverses multiple words', () => {
      expect(reverseString('hello there')).toEqual('ereht olleh')
    })
  
    test('works with numbers and punctuation', () => {
      expect(reverseString('123! abc!')).toEqual('!cba !321')
    })
    test('works with blank strings', () => {
      expect(reverseString('')).toEqual('')
    })
  });