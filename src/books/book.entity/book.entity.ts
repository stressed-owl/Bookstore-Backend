import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  genre: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'float',
  })
  price: number;
}
