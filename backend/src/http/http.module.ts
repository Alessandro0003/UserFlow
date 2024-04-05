import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { CreateAccountController } from './controllers/create-account.controller'
import { AuthenticateAccountController } from './controllers/authenticate-account.controller'

@Module({
  imports: [DatabaseModule],

  controllers: [CreateAccountController, AuthenticateAccountController],
})
export class HttpModule {}
