import { MigrationInterface, QueryRunner } from 'typeorm';
import { chunk } from 'remeda';
import { Logger } from '@nestjs/common';

import * as codePostals from '../seed/codePostals.json';
import { CodePostalEntity } from 'src/code-postal/code-postal.entity';

export class InitSeed1690754067783 implements MigrationInterface {
  private readonly logger = new Logger('Migration');

  public async up(queryRunner: QueryRunner): Promise<void> {
    chunk(codePostals as Array<CodePostalEntity>, 100).map(async (chunk) => {
      await queryRunner.connection
        .createQueryBuilder()
        .insert()
        .into(CodePostalEntity)
        .values(chunk)
        .execute();
    });

    this.logger.debug('codePostal table seeded');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable('codePostal');
  }
}
