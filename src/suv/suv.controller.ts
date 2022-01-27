import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuvService } from './suv.service';
import { CreateSuvDto } from './dto/create-suv.dto';
import { UpdateSuvDto } from './dto/update-suv.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('suv')

@Controller('suv')
export class SuvController {
  constructor(private readonly suvService: SuvService) {}

  @Post()
  create(@Body() createSuvDto: CreateSuvDto) {
    return this.suvService.create(createSuvDto);
  }

  @Get()
  findAll() {
    return this.suvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suvService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuvDto: UpdateSuvDto) {
    return this.suvService.update(id, updateSuvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suvService.remove(id);
  }
}
