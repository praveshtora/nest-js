import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Customer {
  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  state: string;

  @Column()
  petExperience: string;
}
