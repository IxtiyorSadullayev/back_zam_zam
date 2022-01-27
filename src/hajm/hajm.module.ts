import { Module } from '@nestjs/common';
import { HajmService } from './hajm.service';
import { HajmController } from './hajm.controller';

@Module({
  controllers: [HajmController],
  providers: [HajmService]
})
export class HajmModule {}
