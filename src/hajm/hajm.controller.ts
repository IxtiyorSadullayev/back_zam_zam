import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HajmService } from './hajm.service';
import { CreateHajmDto } from './dto/create-hajm.dto';
import { UpdateHajmDto } from './dto/update-hajm.dto';

@Controller('hajm')
export class HajmController {
  constructor(private readonly hajmService: HajmService) {}

  @Post()
  create(@Body() createHajmDto: CreateHajmDto) {
    return this.hajmService.create(createHajmDto);
  }

  @Get()
  findAll() {
    return this.hajmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hajmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHajmDto: UpdateHajmDto) {
    return this.hajmService.update(+id, updateHajmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hajmService.remove(+id);
  }
}
