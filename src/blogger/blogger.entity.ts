import { Post } from '../posts/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('blogger')
export class Blogger {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 15 })
  name: string;

  @Column({ length: 100 })
  youtubeUrl: string;

  @Column()
  createdAt: string;

  @OneToMany(() => Post, post => post.blogger)
  posts: Post[]

}