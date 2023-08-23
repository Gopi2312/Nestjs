import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { Query } from '@nestjs/common';
import { UpdatePostInput } from './dto/update-post.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() =>[Post])
  async getAllPost(){
    return this.postService.getAllPost();
  }

  @Query(() =>Post)
  public async getPostById(@Args('id') id:string){
    return this.postService.getPostById(id);
  }

  @Mutation(() => Post)
  public async createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }

  @Mutation(()=>Post)
  public async updatePost(@Args('id') id: string , @Args('updatePostInput') updatePostInput: UpdatePostInput){
    return this.postService.updatePost(id,updatePostInput);
  }

  @Mutation(()=>Post)
  public async deletePost(@Args('id') id:string){
    return this.postService.deletePost(id);
  }

}
