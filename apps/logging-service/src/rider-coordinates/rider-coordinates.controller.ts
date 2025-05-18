import { Body, Controller, Get, Post } from '@nestjs/common';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { CraeteCoordinatesDTO } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController{
    constructor(private coordinatsService: RiderCoordinatesService){}
    @Get()
    getRiderCoordinates(){
        return 'Hello I am from rider coordinates'
    }
    @Post()
    async saveRiderCoordiantes(
        @Body()
        createCoordinateDTO: CraeteCoordinatesDTO
    ){
        return this.coordinatsService.saveRiderCoordiantes(createCoordinateDTO)
    }
}
