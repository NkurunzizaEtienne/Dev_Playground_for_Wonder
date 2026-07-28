import {IsInt, isString, IsString } from 'class-validator'
export class CreatePropertyDto {
    

    @IsString()
    address!: string

    @IsInt()
    price!: number

    @IsInt()
    bedrooms!: number
    
}