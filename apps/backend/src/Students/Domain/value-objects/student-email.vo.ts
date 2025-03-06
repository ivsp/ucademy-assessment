import { EmailValueObject } from '../../../shared/Domain/ValueObject/email.vo';
export class StudentEmail extends EmailValueObject {
	constructor(studentEmail: string) {
		super(studentEmail);
		if (!studentEmail) throw new Error('You must provide a student email');
	}
}
