import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { CreateAccountController } from './controllers/create-account.controller'
import { AuthenticateAccountController } from './controllers/authenticate-account.controller'
import { FetchInformationUserController } from './controllers/fetch-information-user.controller'

@Module({
  imports: [DatabaseModule],

  controllers: [
    CreateAccountController,
    AuthenticateAccountController,
    FetchInformationUserController,
  ],
})
export class HttpModule {}
