import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PropertyService } from './property.service'
import { UserDto } from './dto/user.dto';

@Controller('property')
export class PropertyController {
   constructor(private readonly propertyService: PropertyService) {}

    @Get()
    getALL(){
        return this.propertyService.getALL()
    }
    @Get(':id')
    getOne(@Param('id') id: string){
        return this.propertyService.getOne(id)
    }
    @Post()
    @UsePipes(new ValidationPipe({ whitelist:true, forbidNonWhitelisted:true, groups:['create'], always:true}))
    create(@Body() body: UserDto) {
        return this.propertyService.create(body)
    }
    @Patch()
    @UsePipes(new ValidationPipe({ whitelist:true, forbidNonWhitelisted:true, groups:['update'], always:true}))
    update(@Body() body: UserDto){
        return this.propertyService.update(body)
    }
}
