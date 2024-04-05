import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { CreateAccountController } from './controllers/create-account.controller'

@Module({
  imports: [DatabaseModule],

  controllers: [CreateAccountController],
})
export class HttpModule {}
