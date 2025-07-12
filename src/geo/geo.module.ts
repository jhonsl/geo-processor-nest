import { Module } from '@nestjs/common';
import { GeoController } from './geo.controller';
import { GeoService } from './geo.service';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  controllers: [GeoController],
  providers: [GeoService],
  imports: [HttpModule, CacheModule.register()],
})
export class GeoModule {}
