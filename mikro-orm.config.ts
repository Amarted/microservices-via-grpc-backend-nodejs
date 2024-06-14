import { EntityCaseNamingStrategy } from '@mikro-orm/core';
import { Migrator } from '@mikro-orm/migrations';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import dotenv from 'dotenv';
import { authMigrationsList } from './src/modules/auth/infrastructure/database/migrations/authMigrationsList';

dotenv.config();

const config: MikroOrmModuleSyncOptions = {
  validate: true,
  strict: true,
  autoLoadEntities: true,
  allowGlobalContext: true,
  // multipleStatements: true, // For database tests where dump is used
  discovery: {
    requireEntitiesArray: false,
    alwaysAnalyseProperties: false,
    checkDuplicateEntities: true,
    checkDuplicateTableNames: true,
    warnWhenNoEntities: false,
  },
  metadataProvider: TsMorphMetadataProvider,
  driver: PostgreSqlDriver,
  namingStrategy: EntityCaseNamingStrategy,
  debug: true,
  extensions: [Migrator],
  migrations: {
    tableName: 'mikro_orm_migrations', // migrations table name
    path: 'src/modules/infrastructure/database/migrations', // path to folder with migration files
    glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
    transactional: true, // run each migration inside transaction
    disableForeignKeys: true, // try to disable foreign_key_checks (or equivalent)
    allOrNothing: true, // run all migrations in current batch in master transaction
    emit: 'ts', // migration generation mode
    migrationsList: [
      ...authMigrationsList,
    ]
  },
  entities: ['dist/**/entities/**/*Entity.js', 'dist/**/schemas/**/*Schema.js'],
  entitiesTs: ['src/**/entities/**/*Entity.ts', 'src/**/schemas/**/*Schema.ts'],
  dbName: process.env.dbName,
  port: parseInt(process.env.dbPort as string),
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
};

export default config;
