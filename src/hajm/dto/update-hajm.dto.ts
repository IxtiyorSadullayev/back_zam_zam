import { PartialType } from '@nestjs/swagger';
import { CreateHajmDto } from './create-hajm.dto';

export class UpdateHajmDto extends PartialType(CreateHajmDto) {}
