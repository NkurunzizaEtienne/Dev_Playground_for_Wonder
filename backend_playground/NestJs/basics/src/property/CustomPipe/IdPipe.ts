import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { isPositive } from "class-validator";

@Injectable()
export class ParseIdPipe implements PipeTransform<string, number> {
    transform(value: string, metadata: ArgumentMetadata): number {
        const val = parseInt(value, 10) // using the base 10
        if(isNaN(val)) throw new BadRequestException("Id must be a number")
        if(!isPositive(val)) throw new BadRequestException("Id must be positive")

        return val
    }
}