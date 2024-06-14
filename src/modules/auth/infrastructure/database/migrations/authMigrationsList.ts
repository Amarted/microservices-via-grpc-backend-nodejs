import { MigrationObject } from '@mikro-orm/core';
import { Migration20240614130952_CreateUserTable } from '../../../../infrastructure/database/migrations/Migration20240614130952_CreateUserTable';

export const authMigrationsList: MigrationObject[] = [
  {
    name: 'Migration20240614130952_CreateUserTable',
    class: Migration20240614130952_CreateUserTable,
  },
];
