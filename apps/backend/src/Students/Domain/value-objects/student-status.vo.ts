import { BooleanValueObject } from '../../../shared/Domain/ValueObject/boolean.vo';
export class StudentStatus extends BooleanValueObject {
  constructor(studentStatus: boolean) {
    super(studentStatus);
    if (!studentStatus) throw new Error('You must provide a student status');
  }
}
