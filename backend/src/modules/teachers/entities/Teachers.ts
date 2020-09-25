import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import Materials from "../../materials/entities/Materials";

@Entity("teachers")
class Teachers {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @ManyToMany(() => Materials)
  @JoinTable({
    name: "teachers_materials_rel",
    joinColumns: [{ name: "teacher_id" }],
    inverseJoinColumns: [{ name: "material_id" }],
  })
  materials: Materials[];

  @UpdateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Teachers;
