import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  Get,
} from '@nestjs/common';
import { GeoService } from './geo.service';
import { CoordinatesDto } from './dto/input.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

@UseInterceptors(CacheInterceptor) // habilita caching automático
@Controller('geo')
export class GeoController {
  constructor(private readonly geoService: GeoService) {}

  @Post('process')
  async process(@Body() dto: CoordinatesDto) {
    return await this.geoService.processCoordinates(dto);
  }

  @Get('healthcheck')
  async healthcheck() {
    return await this.geoService.validateServiceHealth();
  }
}
