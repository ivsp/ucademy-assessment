import { StringValueObject } from './string.vo';

export class PhoneValueObject extends StringValueObject {
  constructor(phone: string) {
    super(phone);
    if (phone) {
      this.ensureIsFormatPhone(
        this.removeAllSpaces(this.cleanPhoneNumber(phone))
      );
    }
  }

  private ensureIsFormatPhone(phone: string): void {
    const formatPhone = /^\+?[0-9]{7,15}$/;
    if (!formatPhone.test(phone)) {
      throw new Error('The phone number format is not valid.');
    }
  }
  private cleanPhoneNumber(phone: string): string {
    return phone.replace(/[^0-9+]/g, '');
  }
}
