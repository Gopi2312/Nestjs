import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  postname: string;

  @Field()
  userId: string;

  @Field({nullable:true})
  postorder:number;
}
