import { PhoneValueObject } from '../../../shared/Domain/ValueObject/phone.vo';
export class StudentPhone extends PhoneValueObject {
  constructor(studentPhone: string) {
    super(studentPhone);
    if (!studentPhone) throw new Error('You must provide a student phone');
  }
}
