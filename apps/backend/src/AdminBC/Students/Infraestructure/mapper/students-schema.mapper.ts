import { Injectable } from '@nestjs/common';
import { Student } from '../../Domain/Student';
import { StudentSchema } from '../schema/student.schema';
import { ObjectId } from 'mongodb';
import { EntitySchemaFactory } from '../../../../database/Domain/entity-schema.factory';
import { ObjectIdValueObject } from '../../../../shared/Domain/ValueObject/objectId.vo';
import { StudentName } from '../../Domain/value-objects/student-name.vo';
import { StudentLastName } from '../../Domain/value-objects/student-last-name.vo';
import { StudentEmail } from '../../Domain/value-objects/student-email.vo';
import { StudentPhone } from '../../Domain/value-objects/student-phone.vo';
import { StudentStatus } from '../../Domain/value-objects/student-status.vo';

@Injectable()
export class StudentsSchemaMapper
  implements EntitySchemaFactory<StudentSchema, Student>
{
  create(student: Student): StudentSchema {
    return {
      _id: new ObjectId(student.getId()),
      name: student.getName(),
      lastName: student.getLastName(),
      email: student.getEmail(),
      phone: student.getPhone(),
      isActive: student.getIsActive(),
    };
  }
  createFromSchema(studentSchema: StudentSchema): Student {
    return new Student(
      new ObjectIdValueObject(studentSchema._id.toString()),
      new StudentName(studentSchema.name),
      new StudentLastName(studentSchema.lastName),
      new StudentEmail(studentSchema.email),
      new StudentPhone(studentSchema.phone),
      new StudentStatus(studentSchema.isActive)
    );
  }
}
