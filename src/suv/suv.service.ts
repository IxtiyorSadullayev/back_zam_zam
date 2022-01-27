import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Suv } from 'src/schemas/suv.schema';
import { CreateSuvDto } from './dto/create-suv.dto';
import { UpdateSuvDto } from './dto/update-suv.dto';

@Injectable()
export class SuvService {

  constructor(@InjectModel(Suv.name,) private suvModel : Model<Suv>){}

  async create(createSuvDto: CreateSuvDto):Promise<Suv> {
    const mijoz = new this.suvModel(createSuvDto);
    return await mijoz.save();
  }

  async findAll():Promise<Suv[]> {
    return this.suvModel.find();
  }

  async findOne(id: number):Promise<Suv> {
    return this.suvModel.findById(id);
  }

  async update(id: string, updateSuvDto: UpdateSuvDto):Promise<Suv> {
    return this.suvModel.findByIdAndUpdate(id, updateSuvDto);
  }

  remove(id: string) {
    return this.suvModel.findByIdAndDelete(id);
  }
}
