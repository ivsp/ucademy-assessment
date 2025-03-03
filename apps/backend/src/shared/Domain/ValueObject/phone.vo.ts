import { StringValueObject } from './string.vo';

export class PhoneValueObject extends StringValueObject {
  constructor(phone: string) {
    super(phone);
    this.ensureIsFormatPhone(this.removeAllSpaces(phone));
  }

  private ensureIsFormatPhone(phone: string): void {
    const formatPhone = /^\+?[0-9]{9,15}$/;
    if (!formatPhone.test(phone)) {
      throw new Error('The phone number format is not valid.');
    }
  }
}
