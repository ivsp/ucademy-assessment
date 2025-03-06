import { StringValueObject } from './string.vo';
export class EmailValueObject extends StringValueObject {
	constructor(email: string) {
		super(email);
		this.ensureIsValid(email);
	}

	private ensureIsValid(email: string): void {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(email)) {
			throw new Error(`Invalid email format: ${email}`);
		}
	}
}
