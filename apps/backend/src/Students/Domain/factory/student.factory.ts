import { Injectable } from '@nestjs/common';
import { Student } from '../Student';
import { EntityFactory } from '../../../database/Domain/entity.factory';
import { StudentEntityRepository } from '../repository/students.repository';
import { ObjectIdValueObject } from '../../../shared/Domain/ValueObject/objectId.vo';
import { StudentName } from '../value-objects/student-name.vo';
import { StudentLastName } from '../value-objects/student-last-name.vo';
import { StudentEmail } from '../value-objects/student-email.vo';
import { StudentPhone } from '../value-objects/student-phone.vo';
import { StudentStatus } from '../value-objects/student-status.vo';

@Injectable()
export class StudentFactory implements EntityFactory<Student> {
	constructor(
		private readonly StudentEntityRepository: StudentEntityRepository
	) {}
	async create(
		name: string,
		lastName: string,
		email: string,
		phone: string,
		isActive: boolean
	): Promise<Student> {
		const student = new Student(
			new ObjectIdValueObject(),
			new StudentName(name),
			new StudentLastName(lastName),
			new StudentEmail(email),
			new StudentPhone(phone),
			new StudentStatus(isActive)
		);
		await this.StudentEntityRepository.create(student, {
			email: student.getEmail(),
		});
		return student;
	}
}
