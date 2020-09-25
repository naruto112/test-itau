import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import Teachers from "../../teachers/entities/Teachers";

@Entity("materials")
class Materials {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Teachers)
  @JoinTable({
    name: "teachers_materials_rel",
    joinColumns: [{ name: "material_id" }],
    inverseJoinColumns: [{ name: "teacher_id" }],
  })
  teachers: Teachers[];

  @UpdateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Materials;
