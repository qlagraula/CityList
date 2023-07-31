import { Field, Int, ArgsType } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@ArgsType()
export class FetchCodePostalsArgs {
  @Field(() => String, { nullable: true })
  search?: string;

  @Field(() => Int, { defaultValue: 0 })
  @Min(0)
  skip?: number;

  @Field(() => Int, { defaultValue: 100 })
  @Min(1)
  @Max(100)
  take?: number;
}
