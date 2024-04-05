import { Controller, Get, Query, Request, UseGuards } from '@nestjs/common'
import { string, z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipes'
import { JwtAuthGuard } from '@/auth/jwt-auth.guard'
import { PrismaService } from '@/database/prisma/prisma.service'

const fetchUserQueryParamSchema = z.object({
  name: string(),
  email: string().email(),
})

type FetchUserQueryParamSchema = z.infer<typeof fetchUserQueryParamSchema>

const queryValidationPipe = new ZodValidationPipe(fetchUserQueryParamSchema)

@Controller('/accounts')
@UseGuards(JwtAuthGuard)
export class FetchInformationUserController {
  constructor(private prismaService: PrismaService) {}

  @Get('/me')
  async handle(@Request() req) {
    const userEmail = req.user.email
    const userName = req.user.name

    const result = await this.prismaService.user.findFirst({
      where: {
        name: userName,
        email: userEmail,
      },
      select: {
        name: true,
        email: true,
      },
    })

    return result
  }
}
