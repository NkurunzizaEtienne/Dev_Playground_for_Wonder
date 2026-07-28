import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Injectable()
export class PropertyService {
    getALL(){
        return "All Properties"
    }
    getOne(id : string){
        return `your id is: ${id}`
    }
    create(createPropertyDto: CreatePropertyDto) {
    return {
        ...createPropertyDto,
        id: Date.now()


    };
}
}
