import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn,CreateDateColumn,DeleteDateColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  id: string;

  @Field()
  @Column({ name: 'user_name' })
  fullname: string;

  @Field()
  @Column({ name: 'phonenumber' })
  phonenumber: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field({nullable:true})
  @UpdateDateColumn({ name: 'updatedAt',nullable:true, type: 'timestamp' })
  updatedAt: Date;

  @Field({nullable:true})
  @DeleteDateColumn({ name: 'deletedAt',nullable:true, type: 'timestamp' })
  deletedAt: Date;

  @Field(() => [Post], { nullable: true })
  @OneToMany(() => Post, (post) => post.user)
  post: Post[];
}
