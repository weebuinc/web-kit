class Argumenter {
  private args = [];
  constructor(args: Array<any>) {
    if (Array.isArray(args)) {
      for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        this.args.push(arg);
      }
    }
  }

  public get number(): number {
    return this.getNative('number');
  }

  public get string(): string {
    return this.getNative('string');
  }

  public get boolean(): boolean {
    return this.getNative('boolean');
  }

  public get symbol(): symbol {
    return this.getNative('symbol');
  }

  public get nil(): null {
    return this.getNative('null');
  }

  public get null(): null {
    return this.getNative('null');
  }

  public get object(): Object {
    return this.getNative('object');
  }

  public get function(): any {
    return this.getNative('function');
  }

  public get array(): Array<any> {
    return this.getNative('array');
  }

  public instance<T>(type: { new (...args): T } | (Function & { prototype: T })): T {
    let args = this.args;
    let result;
    let remove = -1;
    for (let i = 0; i < args.length; i++) {
      let arg = args[i];
      if (arg instanceof type) {
        result = arg;
        remove = i;
        break;
      }
    }

    if (remove >= 0) args.splice(remove, 1);

    return result;
  }
  private screenArray(type: string, arg: any, arrayed: boolean) {
    if (type === 'object') {
      return Array.isArray(arg) ? arrayed : !arrayed;
    }

    return true;
  }
  private screenNull(type: string, arg: any, nulled: boolean) {
    if (type === 'object') {
      return arg === null ? nulled : !nulled;
    }
    return true;
  }

  private getNative(type: string) {
    let args = this.args;
    let result;
    let remove = -1;
    let arrayed = false;
    let nulled = false;

    if (type === 'array') {
      type = 'object';
      arrayed = true;
    }

    if (type === 'null') {
      type = 'object';
      nulled = true;
    }
    for (let i = 0; i < args.length; i++) {
      let arg = args[i];
      if (typeof arg === type && this.screenArray(type, arg, arrayed) && this.screenNull(type, arg, nulled)) {
        result = arg;
        remove = i;
        break;
      }
    }

    if (remove >= 0) args.splice(remove, 1);

    return result;
  }
}

/**
 * This function converts function arguments into an Argumenter object that allows the arguments to be accessed by type.
 * @param { Array<any> } args the arguments to parse with the Argumenter
 * @returns { Argumenter } an object that allows access to the arguments by type
 */
export function argumenter(...args) {
  return new Argumenter(args);
}

export default argumenter;
