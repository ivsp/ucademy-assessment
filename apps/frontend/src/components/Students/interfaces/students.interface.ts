import { TableInterface } from '../../Shared/Tables/interfaces/table.interface';

export class Student implements TableInterface {
  public _id!: string;
  public name!: string;
  public lastName!: string;
  public email!: string;
  public phone!: string;
  public isActive!: boolean;
}
