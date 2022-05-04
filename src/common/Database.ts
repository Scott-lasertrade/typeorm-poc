import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as entities from './entities';
// import * as subscribers from './entities/subscriptions';
import * as migrations from './entities/migrations';
import 'typeorm-aurora-data-api-driver';

// Would only be used when using cli commands to test migrations on a local database
let AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'postgres',
    logging: true,
    entities: [...Object.values(entities)],
    // subscribers: [...Object.values(subscribers)],
    migrations: [...Object.values(migrations)],
});

if (process.env.SECRET_ARN) {
    AppDataSource = new DataSource({
        type: 'aurora-postgres',
        database: process.env.DATABASE ?? '',
        secretArn: process.env.SECRET_ARN ?? '',
        resourceArn: process.env.CLUSTER_ARN ?? '',
        region: process.env.REGION ?? 'ap-southeast-2',
        logging: true,
        entities: [...Object.values(entities)],
        // subscribers: [...Object.values(subscribers)],
        migrations: [...Object.values(migrations)],
    });
}

export default AppDataSource;
