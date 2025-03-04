export class StudentResponse {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone?: string;
  isActive: boolean;

  constructor(
    id: string,
    name: string,
    lastName: string,
    email: string,
    phone: string | undefined,
    isActive: boolean
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.isActive = isActive;
  }
}
