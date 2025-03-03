import { NotFoundException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { EntitySchemaFactory } from '../../Domain/entity-schema.factory';
import { FilterQuery, Model, Document } from 'mongoose';
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
      throw new NotFoundException('Entity was not found.');
    }

    return this.entitySchemaFactory.createFromSchema(entityDocument as TSchema);
  }

  protected async find(
    entityFilterQuery?: FilterQuery<TSchema>
  ): Promise<TEntity[]> {
    return (
      await this.entityModel.find(entityFilterQuery, {}, { lean: true })
    ).map((entityDocument) =>
      this.entitySchemaFactory.createFromSchema(entityDocument as TSchema)
    );
  }

  async create(entity: TEntity): Promise<void> {
    try {
      await new this.entityModel(
        this.entitySchemaFactory.create(entity)
      ).save();
      console.log('entidad guardad::', entity);
    } catch (error) {
      console.error('Error guardando en MongoDB:', error);
    }
  }

  protected async findOneAndReplace(
    entityFilterQuery: FilterQuery<TSchema>,
    entity: TEntity
  ): Promise<void> {
    const updatedEntityDocument = await this.entityModel.findOneAndReplace(
      entityFilterQuery,
      this.entitySchemaFactory.create(entity) as unknown as Document<TSchema>,
      {
        new: true,
        useFindAndModify: false,
        lean: true,
      }
    );

    if (!updatedEntityDocument) {
      throw new NotFoundException('Unable to find the entity to replace.');
    }
  }
}
