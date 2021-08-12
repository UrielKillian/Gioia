import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('places')
export class Place {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  active: boolean;
}
