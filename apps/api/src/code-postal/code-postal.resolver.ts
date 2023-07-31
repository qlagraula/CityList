import { Resolver, Query, Args, Field, ObjectType } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';

import { CodePostalEntity } from './code-postal.entity';
import { CodePostalService } from './code-postal.service';
import { FetchCodePostalsArgs } from './dto/fetch.input';

@ObjectType()
class GroupedCodePostals {
  @Field(() => [CodePostalEntity], { nullable: true })
  metropolitan?: CodePostalEntity[];

  @Field(() => [CodePostalEntity], { nullable: true })
  overseas?: CodePostalEntity[];
}

@Resolver(() => CodePostalEntity)
export class CodePostalResolver {
  private readonly logger = new Logger('Code-Postal');
  constructor(private readonly codePostalService: CodePostalService) {}

  @Query(() => [CodePostalEntity])
  async getCodePostals(
    @Args()
    args: FetchCodePostalsArgs,
  ): Promise<CodePostalEntity[]> {
    return await this.codePostalService.find(args.search, args.skip, args.take);
  }

  @Query(() => GroupedCodePostals)
  async getGroupedCodePostals(
    @Args()
    args: FetchCodePostalsArgs,
  ): Promise<Record<'overseas' | 'metropolitan', CodePostalEntity[]>> {
    this.logger.debug(
      `Received getGroupedCodePostals query with: ${JSON.stringify(args)}`,
    );
    return await this.codePostalService.findGrouped(
      args.search,
      args.skip,
      args.take,
    );
  }
}
