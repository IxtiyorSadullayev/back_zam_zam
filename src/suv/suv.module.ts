import { Module } from '@nestjs/common';
import { SuvService } from './suv.service';
import { SuvController } from './suv.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Suv, SuvSchema } from 'src/schemas/suv.schema';
import { Hajm, HajmSchema } from 'src/schemas/hajm.schema';

@Module({
  controllers: [SuvController],
  providers: [SuvService],
  imports: [MongooseModule.forFeature([{name: Suv.name, schema: SuvSchema}, {name: Hajm.name, schema: HajmSchema}])]
})
export class SuvModule {}
