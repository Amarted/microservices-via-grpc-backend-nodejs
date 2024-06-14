import { Migration } from '@mikro-orm/migrations';

export class Migration20240614130952_CreateUserTable extends Migration {

  async up(): Promise<void> {
    this.addSql(`
      create table "user" (
        "id" uuid not null,
        "username" varchar(255) not null,
        "password" varchar(255) not null,
        "createdAt" timestamptz not null,
        "updatedAt" timestamptz not null,
        constraint "user_pkey" primary key ("id")
      );`
    );
    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }

}
