import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseEntityRepository } from '../../../database/Domain/base-entity.repository';
import { StudentSchema } from '../../Infraestructure/schema/student.schema';
import { Student } from '../Student';
import { StudentsSchemaFactory } from '../../Infraestructure/schema/students-schema.factory';

@Injectable()
export class StudentEntityRepository extends BaseEntityRepository<
  StudentSchema,
  Student
> {
  constructor(
    @InjectModel(StudentSchema.name)
    studentModel: Model<StudentSchema>,
    studentSchemaFactory: StudentsSchemaFactory
  ) {
    super(studentModel, studentSchemaFactory);
  }
}
