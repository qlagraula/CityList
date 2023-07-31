import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';

import { CodePostalEntity } from './code-postal/code-postal.entity';
import { CodePostalModule } from './code-postal/code-postal.module';
import { Init1690750699084 } from 'migrations/init';
import { InitSeed1690754067783 } from 'migrations/initSeed';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'graneet',
      entities: [CodePostalEntity],
      migrations: [Init1690750699084, InitSeed1690754067783],
      migrationsTableName: 'migrations',
      migrationsRun: true,
      migrationsTransactionMode: 'each',
    }),
    CodePostalModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
