import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('tb_posts')
class Posts extends BaseEntity{

  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  str_title!: string;

  @Column()
  str_body!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @Column()
  deleted_at!: Date;

}

export { Posts }