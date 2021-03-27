import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export namespace UserModel {
  @Entity()
  export class User {
    name?: string;

    age?: number;

    password?: string;
  }
}
