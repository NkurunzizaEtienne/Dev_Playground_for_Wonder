import {IS_LENGTH, IsInt, IsPositive, isString, IsString, Length } from 'class-validator'
export class UserDto {

    @IsString()
    @Length(3,8, {groups: ['create'], message: "the length of string is incorrect"})
    address!: string

    @IsInt()
    price!: number

    @IsInt()
    bedrooms!: number
    
}