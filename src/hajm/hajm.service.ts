import { Injectable } from '@nestjs/common';
import { CreateHajmDto } from './dto/create-hajm.dto';
import { UpdateHajmDto } from './dto/update-hajm.dto';

@Injectable()
export class HajmService {
  create(createHajmDto: CreateHajmDto) {
    return 'This action adds a new hajm';
  }

  findAll() {
    return `This action returns all hajm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hajm`;
  }

  update(id: number, updateHajmDto: UpdateHajmDto) {
    return `This action updates a #${id} hajm`;
  }

  remove(id: number) {
    return `This action removes a #${id} hajm`;
  }
}
