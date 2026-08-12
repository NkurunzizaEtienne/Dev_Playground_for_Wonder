import { PipeTransform, BadRequestException } from '@nestjs/common'
import { z } from 'zod'
import { ZodSchema } from 'zod/v3'

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: z.ZodSchema) {}

  transform(value: unknown) {
    const result = this.schema.safeParse(value)

    if (!result.success) {
      throw new BadRequestException(result.error.issues)
    }

    return result.data
  }
}