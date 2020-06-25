import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { table } from "console";

export class CreateProfile1592949656834 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "profile",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },

          {
            name: "name",
            type: "varchar",
          },

          {
            name: "lastname",
            type: "varchar",
          },

          {
            name: "email",
            type: "varchar",
          },

          {
            name: "cellphone",
            type: "varchar",
          },

          {
            name: "logradouro",
            type: "varchar",
          },

          {
            name: "number",
            type: "varchar",
          },

          {
            name: "neighborhood",
            type: "varchar",
          },

          {
            name: "complement",
            type: "varchar",
          },

          {
            name: "city",
            type: "varchar",
          },

          {
            name: "state",
            type: "varchar",
          },

          {
            name: "cep",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("profile");
  }
}
