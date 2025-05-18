import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schemas/rider.coordinate.schema';
import { Model } from 'mongoose';
import { CraeteCoordinatesDTO } from './dto/create-coordinates.dto';

@Injectable()
export class RiderCoordinatesService {
    constructor(
        @InjectModel(RiderCoordinate.name)
        private readonly riderCoodinateModel : Model<RiderCoordinate>
    ){}
    async saveRiderCoordiantes(createCoordinateDTO: CraeteCoordinatesDTO) {
        return await this.riderCoodinateModel.create(createCoordinateDTO)
    }
}
