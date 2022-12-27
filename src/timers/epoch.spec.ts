import epoch from './epoch';

describe('epoch unit tests', () => {
  it('return timestamp for current time', () => {
    const before = new Date().getTime();
    const after = epoch();
    expect(after).toBeGreaterThanOrEqual(before);
  });
  it('return timestamp for specified time', () => {
    const date = new Date('2020-10-11 16:23:49');
    const result = epoch(date);
    expect(result).toBe(date.getTime());
  });
});
