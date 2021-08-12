import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BeforeInsert,
  TableInheritance,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('user')
@TableInheritance({ column: { type: 'varchar', name: 'type' } }) // columnName: 'type' is optional
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cellphone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
}
