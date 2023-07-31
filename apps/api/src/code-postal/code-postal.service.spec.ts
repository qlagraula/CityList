import { Test, TestingModule } from '@nestjs/testing';
import { CodePostalService } from './code-postal.service';

describe('CodePostalService', () => {
  let service: CodePostalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodePostalService],
    }).compile();

    service = module.get<CodePostalService>(CodePostalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
