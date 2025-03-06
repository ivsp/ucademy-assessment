export class BooleanValueObject {
  private readonly boolean: boolean;
  constructor(boolean: boolean) {
    this.boolean = boolean;
  }

  public value(): boolean {
    return this.boolean;
  }

  public isTrue(): boolean {
    return this.boolean === true;
  }

  public isFalse(): boolean {
    return this.boolean === false;
  }

  public toString(): string {
    return this.boolean.toString();
  }

  public isEqualTo(otherBoolean: boolean): boolean {
    return this.boolean === otherBoolean;
  }
}
