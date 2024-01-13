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
  rating: number;

  @Column({
    type: 'boolean',
  })
  isNew: boolean;

  @Column({
    type: 'boolean',
  })
  isBestseller: boolean;

  @Column({
    type: 'boolean',
  })
  isBestPrice: boolean;

  @Column({
    type: 'boolean',
  })
  isBookWithAutograph: boolean;

  @Column({
    type: 'float',
  })
  price: number;
}
