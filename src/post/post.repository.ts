import { Injectable } from '@nestjs/common/decorators';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';
import { UpdatePostInput } from './dto/update-post.input';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PostRepository extends BaseRepository<Post> {
  constructor(private readonly dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }

  public async getAllPost(){
    return await this.find({relations:['user']})
  }

  public async getPostById(id){
    return await this.findOne({relations:['user'],where:{id}})
  }

  async createPost(createPostInput: CreatePostInput) {
    let count=await this.count({where:{userId:createPostInput.userId}})
    createPostInput.postorder=count+1;
    console.log(createPostInput.postorder)
    return this.save(createPostInput);
  }

  public async updatePost(id,updatePostInput){
    const updatedResult = await this.update(id,updatePostInput)

    if (updatedResult.affected === 0) {
      throw new Error(`User with id ${id} not found`);
    }
    return this.findOne({ where: {id} })
  }

  public async deletePost(id){
    const postToDelete = await this.findOne({where:{id}});
    if(!postToDelete){
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    const orderNumberToDelete = postToDelete.postorder;
    await this.createQueryBuilder()
    .update(Post)
    .set({ postorder: () => `"postorder" - 1` })
    .where('"postorder" > :orderNumberToDelete', { orderNumberToDelete })
    .execute();

    await this.softRemove(postToDelete);

    return postToDelete;
  }

}
