import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CoordinatesDto } from './dto/input.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GeoService {
  constructor(private readonly http: HttpService) {}

  async processCoordinates(dto: CoordinatesDto) {
    const response = await firstValueFrom(
        this.http.post('http://localhost:8000/geo/process/', dto),
    );

    return response.data;
  }
}
