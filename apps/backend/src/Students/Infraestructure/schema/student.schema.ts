import { Prop, Schema } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../../../database/Domain/Properties/idetifiable-entity.schema';

@Schema({ versionKey: false, collection: 'students', timestamps: true })
export class StudentSchema extends IdentifiableEntitySchema {
  @Prop({ required: true })
  readonly name: string;
  @Prop({ required: true })
  readonly lastName: string;
  @Prop({ required: true, unique: true })
  readonly email: string;
  @Prop()
  readonly phone: string;
  @Prop({ default: true })
  readonly isActive: boolean;
}
