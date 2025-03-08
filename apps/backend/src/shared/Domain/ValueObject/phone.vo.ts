import { StringValueObject } from './string.vo';

export class PhoneValueObject extends StringValueObject {
  constructor(phone: string) {
    super(phone);
    //TODO Al existir muchos de los contactos sin número de teléfono, asumo no hacer esta comprobación ya que el campo teléfono se entiende que no es obligatorio
    // if (this.removeAllSpaces(phone).length > 0) {
    //   this.ensureIsFormatPhone(
    //     this.removeAllSpaces(this.cleanPhoneNumber(phone))
    //   );
    // }
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
