import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'assets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('country').notNullable();
      table.string('city').notNullable();
      table.float('area').notNullable();
      table.string('description', 1500).notNullable();
      table.string('type').notNullable();
      table.string('number_of_rooms').notNullable();
      table.float('value', 12, 2).notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at');
      table.timestamp('updated_at');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}