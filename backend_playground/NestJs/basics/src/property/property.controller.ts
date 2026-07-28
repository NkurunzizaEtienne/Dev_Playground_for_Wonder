import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PropertyService } from './property.service'
import { CreatePropertyDto } from './dto/createProperty.dto';
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
    @UsePipes(new ValidationPipe({ whitelist:true, forbidNonWhitelisted:true}))
    create(@Body() body: CreatePropertyDto) {
        return this.propertyService.create(body)
    }
}
