import { Test, TestingModule } from '@nestjs/testing';
import { HajmService } from './hajm.service';

describe('HajmService', () => {
  let service: HajmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HajmService],
    }).compile();

    service = module.get<HajmService>(HajmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
