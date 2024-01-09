import capitalize from './capitalize';

test('capitalize first character', () => {
    expect(capitalize('apple')).toBe('Apple');
});