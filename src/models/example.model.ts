import { Column, Model, Table } from 'sequelize-typescript';
import { Example } from '../interfaces/example.interface';

@Table
export class ExampleModel extends Model implements Example {
  @Column
  message: string;
}
