import { ObjectId } from 'mongodb';

export class ObjectIdValueObject {
  private readonly objectId: ObjectId;

  constructor(id?: string) {
    if (id) {
      this.ensureIsValid(id);
      this.objectId = new ObjectId(id);
    } else {
      this.objectId = new ObjectId();
    }
  }

  private ensureIsValid(id: string): void {
    if (!ObjectId.isValid(id)) {
      throw new Error(`Invalid ObjectId format: ${id}`);
    }
  }

  public value(): string {
    return this.objectId.toHexString();
  }

  public equals(other: ObjectIdValueObject): boolean {
    return this.objectId.equals(other.value());
  }
}
