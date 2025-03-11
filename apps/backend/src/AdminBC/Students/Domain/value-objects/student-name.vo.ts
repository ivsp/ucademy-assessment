import { StringValueObject } from '../../../../shared/Domain/ValueObject/string.vo';
export class StudentName extends StringValueObject {
  constructor(studentName: string) {
    super(studentName);
    if (
      !studentName ||
      studentName.trim().length < 2 ||
      studentName.trim().length > 50
    ) {
      throw new Error('The name must contain between 2 y 50 characters.');
    }
  }
}
