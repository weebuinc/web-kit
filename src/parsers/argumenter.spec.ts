import { argumenter } from './argumenter';

describe('argumenter unit tests', () => {
  it('parse primitive type arguments', () => {
    const args = argumenter('Jane Doe', 22, true);

    const age = args.number;
    const isStudent = args.boolean;
    const name = args.string;

    expect(name).toBe('Jane Doe');
    expect(age).toBe(22);
    expect(isStudent).toBe(true);
  });

  it('parse complex type arguments', () => {
    const func = jest.fn();
    const array = [1, 2, 3];
    const obj = { name: 'Jane Doe', age: 30 };
    const sym = Symbol('Symbolic');

    const args = argumenter(array, sym, obj, func);

    expect(args.object).toEqual(obj);
    expect(args.array).toEqual(array);
    expect(args.function).toEqual(func);
    expect(args.symbol).toEqual(sym);
  });

  it('parse null arguments', () => {
    const args = argumenter(10, 'Jane Doe', null, [1, 2, 3], null, {});

    expect(args.null).toBeNull();
    expect(args.nil).toBeNull();

    // when the two nulls are parsed, any subsequent access of null and nil should be undefined
    expect(args.null).toBeUndefined();
    expect(args.nil).toBeUndefined();
  });

  it('parse different instances of classes', () => {
    class Cat {}
    class Dog {}

    const cat = new Cat();
    const dog = new Dog();

    const args = argumenter(cat, dog);

    expect(args.instance(Dog)).toBeInstanceOf(Dog);
    expect(args.instance(Cat)).toBeInstanceOf(Cat);
  });

  it('parse different instances of extended classes by base class', () => {
    class Animal {}
    class Cat extends Animal {}
    class Dog extends Animal {}

    const cat = new Cat();
    const dog = new Dog();

    const args = argumenter(cat, dog);
    expect(args.instance(Animal)).toBeInstanceOf(Cat);
    expect(args.instance(Animal)).toBeInstanceOf(Dog);
  });

  it('attempt to parse instances of a base class by the extended class', () => {
    class Animal {}
    class Cat extends Animal {}
    class Dog extends Animal {}

    const cat = new Animal();
    const dog = new Animal();

    const args = argumenter(cat, dog);
    expect(args.instance(Cat)).toBeUndefined();
    expect(args.instance(Dog)).toBeUndefined();
  });
});
