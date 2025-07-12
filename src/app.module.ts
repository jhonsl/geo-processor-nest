import { Module } from '@nestjs/common';
import { GeoModule } from './geo/geo.module';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [GeoModule, HttpModule, CacheModule.register()],
})
export class AppModule {}
