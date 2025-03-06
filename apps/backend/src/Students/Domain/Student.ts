import { AggregateRoot } from '@nestjs/cqrs';
import { ObjectIdValueObject } from '../../shared/Domain/ValueObject/objectId.vo';
import { StudentName } from './value-objects/student-name.vo';
import { StudentLastName } from './value-objects/student-last-name.vo';
import { StudentEmail } from './value-objects/student-email.vo';
import { StudentPhone } from './value-objects/student-phone.vo';
import { StudentStatus } from './value-objects/student-status.vo';

export class Student extends AggregateRoot {
	constructor(
		private readonly _id: ObjectIdValueObject,
		private readonly name: StudentName,
		private readonly lastName: StudentLastName,
		private readonly email: StudentEmail,
		private readonly phone: StudentPhone,
		private isActive: StudentStatus
	) {
		super();
	}
	getId(): string {
		return this._id.value();
	}
	getName(): string {
		return this.name.value();
	}
	getLastName(): string {
		return this.lastName.value();
	}
	getEmail(): string {
		return this.email.value();
	}
	getPhone(): string {
		return this.phone.value();
	}
	getIsActive(): boolean {
		return this.isActive.value();
	}

	changeStatus(newStatus: boolean): void {
		this.isActive = new StudentStatus(newStatus);
	}
}
