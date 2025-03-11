import { StringValueObject } from '../../../../shared/Domain/ValueObject/string.vo';
export class StudentLastName extends StringValueObject {
  constructor(studentLastName: string) {
    super(studentLastName);
    if (
      !studentLastName ||
      studentLastName.trim().length < 2 ||
      studentLastName.trim().length > 50
    ) {
      throw new Error('The last name must contain between 2 y 50 characters.');
    }
  }
}
