import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
@Injectable()
export class PropertyService {
    getALL(){
        return "All Properties"
    }
    getOne(id : string){
        return `your id is: ${id}`
    }
    create(body: UserDto) {
        const newPost = {
            id: Date.now(),
            ...body,
        }
        return newPost
    }
    update(body: UserDto){
        return body
    }
}
