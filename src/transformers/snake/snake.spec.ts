import { snake } from './snake';

describe('snake unit tests', () => {
  it('snake from camel case', () => {
    const result = snake('janeDoe');
    expect(result).toBe('jane_doe');
  });
  it('snake from capital case', () => {
    const result = snake('Jane Doe');
    expect(result).toBe('jane_doe');
  });
  it('snake from kebab case', () => {
    const result = snake('jane-doe');
    expect(result).toBe('jane_doe');
  });
});
