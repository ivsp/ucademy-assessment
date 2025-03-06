import { AggregateRoot } from '@nestjs/cqrs';
import { IdentifiableEntitySchema } from './Properties/idetifiable-entity.schema';

export interface EntitySchemaFactory<
	TSchema extends IdentifiableEntitySchema,
	TEntity extends AggregateRoot
> {
	create(entity: TEntity): TSchema;
	createFromSchema(entitySchema: TSchema): TEntity;
}
