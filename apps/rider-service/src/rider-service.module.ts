import { Module } from '@nestjs/common';
import { RiderServiceController } from './rider-service.controller';
import { RiderServiceService } from './rider-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinate, RiderCoordinateSchema } from 'apps/logging-service/src/rider-coordinates/schemas/rider.coordinate.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@localhost:27017/?authSource=admin'), // Update with your MongoDB connection string
    MongooseModule.forFeature([{ name: RiderCoordinate.name, schema: RiderCoordinateSchema }]),
    ClientsModule.register([{ name: 'RIDER_SERVICE', transport: Transport.TCP }]),
  ],
  controllers: [RiderServiceController],
  providers: [RiderServiceService],
})
export class RiderServiceModule {}
