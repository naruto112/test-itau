import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTeachersMaterials1600824277618
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "teachers_materials_rel",
        columns: [
          {
            name: "teacher_id",
            type: "uuid",
          },
          {
            name: "material_id",
            type: "uuid",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "teachers_materials_rel",
      new TableForeignKey({
        columnNames: ["teacher_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "teachers",
        name: "fk_teachers_material_",
        onDelete: "CASCADE",
        onUpdate: "SET NULL",
      })
    );

    await queryRunner.createForeignKey(
      "teachers_materials_rel",
      new TableForeignKey({
        columnNames: ["material_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "materials",
        name: "fk_materials_teachers",
        onDelete: "CASCADE",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "teachers_materials_rel",
      "fk_teachers_material_"
    );
    await queryRunner.dropForeignKey(
      "teachers_materials_rel",
      "fk_materials_teachers"
    );

    await queryRunner.dropTable("teachers_materials_rel");
  }
}
