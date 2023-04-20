import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export const typeORMConfig:TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'cha',
    password: 'qwer1234',
    database: 'everytalk',
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
}