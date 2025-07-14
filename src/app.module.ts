import { Module } from '@nestjs/common';
import { GeoModule } from './geo/geo.module';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [GeoModule, HttpModule, CacheModule.register(), ConfigModule.forRoot({
    isGlobal: true,
  })],
})
export class AppModule {}
