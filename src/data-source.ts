import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'persionnel_manager',
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migrations/scripts/*.ts'],
  subscribers: [],
  migrationsTableName: 'migrations',
});
