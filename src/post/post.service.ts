/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { PostRepository } from './post.repository';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostService {
  constructor(private readonly postRepo: PostRepository) {}
  create(createPostInput: CreatePostInput) {
    return this.postRepo.createPost(createPostInput);
  }

  public async getAllPost(){
    return this.postRepo.getAllPost();
  }

  public async getPostById(id){
    return this.postRepo.getPostById(id);
  }
  public async updatePost(id,updatePostInput){
    return this.postRepo.updatePost(id,updatePostInput);
  }
  public async deletePost(userId){
    return this.postRepo.deletePost(userId);
  }

}
