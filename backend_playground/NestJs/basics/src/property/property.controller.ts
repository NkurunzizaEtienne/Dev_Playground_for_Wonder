import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PropertyService } from './property.service'
import { UserDto } from './dto/user.dto';
import { ParseIdPipe } from './CustomPipe/IdPipe';



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
    create(@Body() body: UserDto) {
        return this.propertyService.create(body)
    }
    @Patch(':id')
    update(@Body() body: UserDto,
    @Param('id', ParseIdPipe) id
    ) {
        return this.propertyService.update(body)
    }
}
