import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Init1690750699084 implements MigrationInterface {
  private readonly logger = new Logger('Migration');

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'codePostal',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'codePostal',
            type: 'varchar',
            length: '5',
          },
          {
            name: 'codeCommune',
            type: 'varchar',
            length: '5',
          },
          {
            name: 'nomCommune',
            type: 'varchar',
          },
          {
            name: 'libelleAcheminement',
            type: 'varchar',
          },
        ],
      }),
      true,
    );

    this.logger.debug('codePostal table created');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('codePostal');
  }
}
