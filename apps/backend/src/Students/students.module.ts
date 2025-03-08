import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { StudentEntityRepository } from './Domain/repository/students.repository';
import { StudentsSchemaFactory } from './Infraestructure/schema/students-schema.factory';
import { StudentFactory } from './Domain/factory/student.factory';
import { StudentCommandHandler } from './Aplication/commands';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { StudentSchema } from './Infraestructure/schema/student.schema';
import { StudentQueryHandler } from './Aplication/queries';
import { StudentAdminGetController } from '../API/AdminBC/Controllers/StudentAdmin/student-admin-get.controller';
import { StudentAdminPostController } from '../API/AdminBC/Controllers/StudentAdmin/student-admin-post.controller';
import { StudentAdminPutController } from '../API/AdminBC/Controllers/StudentAdmin/student-admin-put.controller';
import { StudentAdminStatusPutController } from '../API/AdminBC/Controllers/StudentAdmin/student-admin-status-put.controller';
import { StudentsAdminGetController } from '../API/AdminBC/Controllers/StudentAdmin/students-admin-get.controller';

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
  controllers: [
    StudentAdminGetController,
    StudentAdminPostController,
    StudentAdminPutController,
    StudentAdminStatusPutController,
    StudentsAdminGetController,
  ],
  providers: [
    StudentEntityRepository,
    StudentsSchemaFactory,
    StudentFactory,
    ...StudentCommandHandler,
    ...StudentQueryHandler,
  ],
})
export class StudentModule {}
