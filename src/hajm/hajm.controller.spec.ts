import { Test, TestingModule } from '@nestjs/testing';
import { HajmController } from './hajm.controller';
import { HajmService } from './hajm.service';

describe('HajmController', () => {
  let controller: HajmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HajmController],
      providers: [HajmService],
    }).compile();

    controller = module.get<HajmController>(HajmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
