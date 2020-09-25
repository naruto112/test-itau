"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTeachersMaterials1600824277618 = void 0;

var _typeorm = require("typeorm");

class CreateTeachersMaterials1600824277618 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "teachers_materials_rel",
      columns: [{
        name: "teacher_id",
        type: "uuid"
      }, {
        name: "material_id",
        type: "uuid"
      }]
    }));
    await queryRunner.createForeignKey("teachers_materials_rel", new _typeorm.TableForeignKey({
      columnNames: ["teacher_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "teachers",
      name: "fk_teachers_material_",
      onDelete: "CASCADE",
      onUpdate: "SET NULL"
    }));
    await queryRunner.createForeignKey("teachers_materials_rel", new _typeorm.TableForeignKey({
      columnNames: ["material_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "materials",
      name: "fk_materials_teachers",
      onDelete: "CASCADE",
      onUpdate: "SET NULL"
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey("teachers_materials_rel", "fk_teachers_material_");
    await queryRunner.dropForeignKey("teachers_materials_rel", "fk_materials_teachers");
    await queryRunner.dropTable("teachers_materials_rel");
  }

}

exports.CreateTeachersMaterials1600824277618 = CreateTeachersMaterials1600824277618;