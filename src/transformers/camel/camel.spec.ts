import { camel } from './camel';

describe('camel unit tests', () => {
  it('kebab from capital case', () => {
    const result = camel('Jane Doe');
    expect(result).toBe('janeDoe');
  });
  it('camel from kebab case', () => {
    const result = camel('john-doe');
    expect(result).toBe('johnDoe');
  });
  it('camel from snake case', () => {
    const result = camel('john_doe');
    expect(result).toBe('johnDoe');
  });
});
