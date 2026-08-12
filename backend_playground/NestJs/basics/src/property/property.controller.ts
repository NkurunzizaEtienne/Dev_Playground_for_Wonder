import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PropertyService } from './property.service'
import { PropertySchema } from './schemas/property.schema';
import type { PropertyDto } from './schemas/property.schema';
import { ZodValidationPipe } from './pipes/zodPipe';




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
    @UsePipes(new ZodValidationPipe(PropertySchema))
    create(@Body() body: PropertyDto) {
        return body
    }
    
}
