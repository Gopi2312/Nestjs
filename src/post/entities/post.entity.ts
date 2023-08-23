import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn
} from 'typeorm';

@ObjectType()
@Entity({ name: 'post' })
export class Post {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'post_id' })
  id: string;

  @Field()
  @Column({ name: 'post_name' })
  postname: string;

  @Field()
  @ManyToOne(() => User, (user) => user.post)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Field()
  @Column({ name: 'user_id' })
  userId: string;

  @Field({nullable:true})
  @Column({name:'postorder',nullable:true})
  postorder: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field({nullable:true})
  @UpdateDateColumn({ name: 'updatedAt',nullable:true, type: 'timestamp' })
  updatedAt: Date;

  @Field({nullable:true})
  @DeleteDateColumn({ name: 'deletedAt',nullable:true, type: 'timestamp' })
  deletedAt: Date;
}
