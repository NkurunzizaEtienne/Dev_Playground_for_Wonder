import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
@Injectable()
export class PropertyService {
    getALL(){
        return "All Properties"
    }
    getOne(id : string){
        return `your id is: ${id}`
    }
    
}
