import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseEntityRepository } from '../../../database/Domain/base-entity.repository';
import { StudentSchema } from '../../Infraestructure/schema/student.schema';
import { Student } from '../Student';
import { StudentsSchemaMapper } from '../../Infraestructure/mapper/students-schema.mapper';

@Injectable()
export class StudentEntityRepository extends BaseEntityRepository<
  StudentSchema,
  Student
> {
  constructor(
    @InjectModel(StudentSchema.name)
    studentModel: Model<StudentSchema>,
    studentSchemaFactory: StudentsSchemaMapper
  ) {
    super(studentModel, studentSchemaFactory);
  }
}
