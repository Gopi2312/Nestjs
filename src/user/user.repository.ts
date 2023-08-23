import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreateUserInputs } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UpdateUserInputs } from './dto/update-user.input';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  public async getAllUser(){
    return await this.find({relations:['post']})
  }

  public async createUser(createUserInputs: CreateUserInputs) {
    return await this.save({
      fullname: createUserInputs.fullname,
      phonenumber:createUserInputs.phonenumber,
    });
  }

  public async updateUser(userId,updateUserInput:UpdateUserInputs){
    const updateResult = await this.update(userId, updateUserInput);

    if (updateResult.affected === 0) {
      throw new Error(`User with id ${userId} not found`);
    }
    return this.findOne({ where: { id: userId } })
  }

  public async deleteUser(userId){
    const deletedUser = await this.findOne({ where: { id: userId } })

    if (!deletedUser) {
      throw new Error(`User with id ${userId} not found`);
    }

    return await this.softRemove(deletedUser)
  }
}
