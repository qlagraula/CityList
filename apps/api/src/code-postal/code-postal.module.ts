import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CodePostalResolver } from './code-postal.resolver';
import { CodePostalService } from './code-postal.service';
import { CodePostalEntity } from './code-postal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CodePostalEntity])],
  providers: [CodePostalResolver, CodePostalService],
  exports: [TypeOrmModule],
})
export class CodePostalModule {}
