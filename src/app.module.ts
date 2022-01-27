import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuvModule } from './suv/suv.module';
import { HajmModule } from './hajm/hajm.module';

const db = 'mongodb+srv://ixtiyor:ixtiyor99@cluster0.pac6i.mongodb.net/zam_zam?retryWrites=true&w=majority'

@Module({
  imports: [MongooseModule.forRoot(db), SuvModule, HajmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
