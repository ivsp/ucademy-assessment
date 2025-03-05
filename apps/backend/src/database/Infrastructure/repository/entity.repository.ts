import { ConflictException, NotFoundException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { EntitySchemaFactory } from '../../Domain/entity-schema.factory';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { IdentifiableEntitySchema } from '../../Domain/Properties/idetifiable-entity.schema';

export abstract class EntityRepository<
  TSchema extends IdentifiableEntitySchema,
  TEntity extends AggregateRoot
> {
  constructor(
    protected readonly entityModel: Model<TSchema>,
    protected readonly entitySchemaFactory: EntitySchemaFactory<
      TSchema,
      TEntity
    >
  ) {}

  protected async findOne(
    entityFilterQuery?: FilterQuery<TSchema>
  ): Promise<TEntity> {
    const entityDocument = await this.entityModel.findOne(
      entityFilterQuery,
      {},
      { lean: true }
    );

    if (!entityDocument) {
      throw new NotFoundException('Error trying to find entity');
    }

    return this.entitySchemaFactory.createFromSchema(entityDocument as TSchema);
  }

  protected async find(
    entityFilterQuery?: FilterQuery<TSchema>,
    filterOptions?: { limit?: number; offset?: number }
  ): Promise<TEntity[]> {
    const entityResults = (
      await this.entityModel
        .find(entityFilterQuery, {}, { lean: true })
        .skip(filterOptions.offset)
        .limit(filterOptions.limit)
    ).map((entityDocument) =>
      this.entitySchemaFactory.createFromSchema(entityDocument as TSchema)
    );
    if (!entityResults) {
      throw new NotFoundException('Error trying to find entity');
    }
    return entityResults;
  }

  async create(entity: TEntity, uniqueFiledObject: unknown): Promise<void> {
    const existingUser = await this.entityModel.findOne(
      uniqueFiledObject as FilterQuery<TSchema>
    );
    if (existingUser) {
      throw new ConflictException('A user already exists with this email');
    }
    await new this.entityModel(this.entitySchemaFactory.create(entity)).save();
  }

  protected async findOneAndUpdate(
    entityFilterQuery: FilterQuery<TSchema>,
    entity: TEntity
  ): Promise<TEntity> {
    const updatedEntityDocument = await this.entityModel.findOneAndUpdate(
      entityFilterQuery,
      this.entitySchemaFactory.create(
        entity
      ) as unknown as UpdateQuery<TSchema>,
      {
        new: true,
        useFindAndModify: false,
        lean: true,
      }
    );
    if (!updatedEntityDocument) {
      throw new NotFoundException('Unable to find the entity to replace.');
    }
    return this.entitySchemaFactory.createFromSchema(
      updatedEntityDocument as unknown as TSchema
    );
  }
}
