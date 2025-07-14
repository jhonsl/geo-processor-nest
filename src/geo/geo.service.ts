import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CoordinatesDto } from './dto/input.dto';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GeoService {
  constructor(
    private readonly http: HttpService,
    private configService: ConfigService,
  ) {}

  async processCoordinates(dto: CoordinatesDto) {
    try {
      const response = await firstValueFrom(
        this.http.post(
          `${this.configService.get<string>('BACKEND_URL')}/geo/process`,
          dto,
        ),
      );

      return response.data;
    } catch (error) {
      throw new Error('Error processing coordinates');
    }
  }

  async validateServiceHealth() {
    try {
      const response = await firstValueFrom(
        this.http.get(
          `${this.configService.get<string>('BACKEND_URL')}/geo/healthcheck`,
        ),
      );
      return response.data;
    } catch (error) {
      throw new Error('Geo service is not healthy');
    }
  }
}
