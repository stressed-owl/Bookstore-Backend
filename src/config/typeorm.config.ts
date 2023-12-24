import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// const port: number = parseInt(<string>process.env.PORT) || 3306;

export const typeOrmConnectionConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'Nikita_',
  password: 'pass1234',
  database: 'bookstore',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
