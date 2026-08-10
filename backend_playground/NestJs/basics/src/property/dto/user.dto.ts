import {IS_LENGTH, IsInt, IsPositive, isString, IsString, Length } from 'class-validator'
export class UserDto {

    @IsString()
    @Length(3,8, {groups: ['create'], message: "the length of string is incorrect"})
    address!: string

    @IsInt()
    @IsPositive({groups: ['update'], message: "the price is not positive"})
    price!: number

    @IsInt()
    bedrooms!: number
    
}