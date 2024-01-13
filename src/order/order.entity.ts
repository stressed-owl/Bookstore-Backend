import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  card: string;

  @Column()
  valid: string;

  @Column()
  cvv: number;

  @Column({
    type: 'text',
  })
  products: string;

  @Column()
  orderID: number;
}
