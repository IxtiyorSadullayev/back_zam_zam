import { PartialType } from '@nestjs/swagger';
import { CreateSuvDto } from './create-suv.dto';

export class UpdateSuvDto extends PartialType(CreateSuvDto) {}
