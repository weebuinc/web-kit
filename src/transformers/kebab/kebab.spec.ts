import { kebab } from './kebab';

describe('kebab unit tests', () => {
  it('kebab from camel case', () => {
    const result = kebab('janeDoe');
    expect(result).toBe('jane-doe');
  });
  it('kebab from capital case', () => {
    const result = kebab('Jane Doe');
    expect(result).toBe('jane-doe');
  });
  it('kebab from snake case', () => {
    const result = kebab('jane_doe');
    expect(result).toBe('jane-doe');
  });
});
