import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInputs } from './dto/create-user.input';
import { UpdateUserInputs } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  public async createUser(
    @Args('createUserInputs') createUserInputs: CreateUserInputs,
  ) {
    return this.userService.createUser(createUserInputs);
  }

  @Query(()=>[User])
  public async getAllUser(){
    return this.userService.getAllUser();
  }

  @Query(() => User)
  public async getUserById(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Mutation(()=>User)
  public async updateUser(@Args('userId') userId: string , @Args('updateUserInput') updateUserInput: UpdateUserInputs){
    return this.userService.updateUser(userId,updateUserInput);
  }

  @Mutation(()=>User)
  public async deleteUser(@Args('userId') userId:string){
    return this.userService.deleteUser(userId);
  }
}
