import epoch from './epoch';

describe('epoch unit tests', () => {
  it('return timestamp for current time', () => {
    const before = new Date().getTime();
    const after = epoch();
    expect(after).toBeGreaterThanOrEqual(before);
  });
});
