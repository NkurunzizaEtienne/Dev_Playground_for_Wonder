# Reka dukore aka ka boro bya frsh!!

part1:

ValidationA : intro to validation
Installing class-validator and class-transformer \~ npm i class-validator class-transformer
using UsePipe(), DTOs and decorators like @IsInt(), @IsString, ValidationPipe({})

validationB: validation groups 

just used two groups. 'create' and 'update'. these groups help in reusability. anything that has same validation 

rules u give it the same group. 

example if on create. U no longer have create and update DTOs. Instead u have user.dto.ts. in this file u set all your

rules. and then in the controller u specify whether u have update group or create group for your route.



example: import { IsEmail, IsString, MinLength } from 'class-validator';



export class UserDto {

&#x20; @IsString({ groups: \['create', 'update'] })

&#x20; @MinLength(3, { groups: \['create'] })

&#x20; name: string;



&#x20; @IsEmail({}, { groups: \['create'] })

&#x20; email: string;



&#x20; @IsString({ groups: \['update'] })

&#x20; password?: string;

}

