import { Controller, Get, Param } from '@nestjs/common';
import { RiderServiceService } from './rider-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rider')
export class RiderServiceController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly riderServiceService: RiderServiceService) { }

  // @Get(':id')
  @MessagePattern({cmd:'get-rider'})
  async getRiderbyId(
    // @Param()
    data: any
  ) {
    return Promise.resolve({ id: data.id, firstName: 'Jane', lastName: 'Doe', email: 'jane@gmail.com' })
  }
}
