export class EditStudentRequest {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone?: string;
  isActive: boolean;
}
