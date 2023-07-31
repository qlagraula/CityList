import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CodePostalEntity } from './code-postal.entity';
import { ILike, Repository } from 'typeorm';
import { groupBy } from 'remeda';

@Injectable()
export class CodePostalService {
  constructor(
    @InjectRepository(CodePostalEntity)
    private readonly CodePostalRepository: Repository<CodePostalEntity>,
  ) {}

  async find(search: string, skip: number, take: number) {
    const [codePostals] = await this.CodePostalRepository.findAndCount({
      skip,
      take,
      order: {
        nomCommune: 'ASC',
      },
      where: search && [
        { nomCommune: ILike(`${search}%`) },
        { codePostal: ILike(`${search}%`) },
      ],
    });

    return codePostals;
  }

  async findGrouped(search: string, skip: number, take: number) {
    const codePostals = await this.find(search, skip, take);
    return groupBy(codePostals, (codePostal) => {
      if (parseInt(codePostal.codePostal, 10) < 97000) return 'metropolitan';

      return 'overseas';
    }) as Record<'overseas' | 'metropolitan', [CodePostalEntity]>;
  }

  async create(codePostal) {
    return await this.CodePostalRepository.create(codePostal);
  }
}
