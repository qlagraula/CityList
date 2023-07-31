import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('codePostal')
@ObjectType()
export class CodePostalEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column('varchar', { length: 5 })
  codePostal: string;

  @Field(() => String)
  @Column('varchar', { length: 5 })
  codeCommune: string;

  @Field(() => String)
  @Column('varchar')
  nomCommune: string;

  @Field(() => String)
  @Column('varchar')
  libelleAcheminement: string;
}
