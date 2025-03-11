import { Student } from '../../Domain/Student';
import { StudentResponse } from '../dto/response/student-response.dto';

export class StudentMapper {
  static toResponse(entity: Student): StudentResponse {
    return new StudentResponse(
      entity.getId(),
      entity.getName(),
      entity.getLastName(),
      entity.getEmail(),
      entity.getPhone(),
      entity.getIsActive()
    );
  }

  static toResponseList(entities: Student[]): StudentResponse[] {
    return entities.map((student) => this.toResponse(student));
  }
}
