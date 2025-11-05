export class StringBuilder {
  private value = '';

  static parse(str: string): StringBuilder {
    const stringBuilder = new StringBuilder();
    stringBuilder.value = str;

    return stringBuilder;
  }

  firstChar(upperCase = false): StringBuilder {
    this.value = this.value
      .charAt(0)
      [upperCase ? 'toUpperCase' : 'toLowerCase']();

    return this;
  }

  append(str: string): StringBuilder {
    this.value += str;
    return this;
  }

  build(): string {
    return this.value;
  }
}
