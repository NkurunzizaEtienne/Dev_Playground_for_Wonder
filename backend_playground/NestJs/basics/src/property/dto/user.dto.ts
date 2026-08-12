import {IS_LENGTH, IsInt, IsPositive, isString, IsString, Length } from 'class-validator'
export class UserDto {

    @IsString()
    address!: string

    @IsInt()
    price!: number

    @IsInt()
    bedrooms!: number
    
}