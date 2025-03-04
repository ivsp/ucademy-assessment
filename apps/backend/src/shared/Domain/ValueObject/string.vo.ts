export class StringValueObject {
  private readonly string: string;
  constructor(string: string) {
    if (string) {
      this.string = this.removeInitialAndEndWhiteSpaces(string);
    }
  }

  public value(): string {
    return this.string;
  }

  public toLoweCase(): string {
    return this.string.toLowerCase();
  }

  public toUpperCase(): string {
    return this.string.toUpperCase();
  }

  public capitalize(): string {
    return (
      this.string.charAt(0).toUpperCase() + this.string.slice(1).toLowerCase()
    );
  }

  public isEqual(otherString: string): boolean {
    return this.string === otherString;
  }

  private removeInitialAndEndWhiteSpaces(string: string) {
    return string.trim();
  }

  public removeAllSpaces(string: string) {
    return string.replace(/\s+/g, '');
  }
}
