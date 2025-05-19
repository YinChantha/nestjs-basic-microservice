import { Module } from '@nestjs/common';
import { LoggingServiceController } from './logging-service.controller';
import { LoggingServiceService } from './logging-service.service';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://basic-micro-service:123@cluster0.apj4w11.mongodb.net/basic-micro-service'),RiderCoordinatesModule],
  controllers: [LoggingServiceController],
  providers: [LoggingServiceService],
})
export class LoggingServiceModule {}