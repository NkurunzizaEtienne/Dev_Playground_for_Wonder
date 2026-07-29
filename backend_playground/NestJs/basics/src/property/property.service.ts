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
    create(body: CreatePropertyDto) {
        const newPost = {
            id: Date.now(),
            ...body,
        }
        return newPost
    }
}
