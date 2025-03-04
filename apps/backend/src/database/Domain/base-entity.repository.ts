import { AggregateRoot } from '@nestjs/cqrs';
import { FilterQuery } from 'mongoose';
import { IdentifiableEntitySchema } from './Properties/idetifiable-entity.schema';
import { ObjectId } from 'mongodb';
import { EntityRepository } from '../Infrastructure/repository/entity.repository';

export abstract class BaseEntityRepository<
  TSchema extends IdentifiableEntitySchema,
  TEntity extends AggregateRoot
> extends EntityRepository<TSchema, TEntity> {
  async findOneById(id: string): Promise<TEntity> {
    return this.findOne({ _id: new ObjectId(id) } as FilterQuery<TSchema>);
  }

  async findOneAndReplaceById(id: string, entity: TEntity): Promise<TEntity> {
    const newEntity = await this.findOneAndUpdate(
      { _id: new ObjectId(id) } as FilterQuery<TSchema>,
      entity
    );
    return newEntity;
  }

  async findAll(): Promise<TEntity[]> {
    return this.find({});
  }
}
