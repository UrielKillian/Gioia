import { User } from 'src/users/entities/user.entity';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity()
export class Administrator extends User {
  @Column()
  DNI: string;
}
