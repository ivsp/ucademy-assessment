import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { StudentsController } from '../API/Student/student.controller';
import { StudentEntityRepository } from './Domain/repository/students.repository';
import { StudentsSchemaFactory } from './Infraestructure/schema/students-schema.factory';
import { StudentFactory } from './Domain/factory/student.factory';
import { StudentCommandHandler } from './Aplication/commands';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { StudentSchema } from './Infraestructure/schema/student.schema';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: StudentSchema.name,
        schema: SchemaFactory.createForClass(StudentSchema),
      },
    ]),
  ],
  controllers: [StudentsController],
  providers: [
    StudentEntityRepository,
    StudentsSchemaFactory,
    StudentFactory,
    ...StudentCommandHandler,
  ],
})
export class StudentModule {}
