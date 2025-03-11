import { BooleanValueObject } from '../../../../shared/Domain/ValueObject/boolean.vo';
export class StudentStatus extends BooleanValueObject {
  constructor(studentStatus: boolean) {
    super(studentStatus);
  }
}
