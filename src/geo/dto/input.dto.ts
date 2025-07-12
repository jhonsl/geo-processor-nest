import {
  IsArray,
  ValidateNested,
  ArrayNotEmpty,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

class Point {
  @IsNumber()
  lat: number;

  @IsNumber()
  lng: number;
}

export class CoordinatesDto {
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => Point)
  points: Point[];
}
