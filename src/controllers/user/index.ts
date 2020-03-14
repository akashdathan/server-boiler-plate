import { Body, JsonController, Post, Authorized } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { User } from '../../entities/user';
import { Database } from '../../utils/db';
import { ROLES } from '../../middleware/auth';
import { UserInfo } from './validations';

@OpenAPI({ security: [{ ApiKeyAuth: [] }]})
@JsonController()
export class UserController {

  @Post('/createUser')
  @Authorized([ROLES.SUPER_ADMIN, ROLES.WRITE_ADMIN])
  async createUser(@Body() body: UserInfo) {
    const user = new User();
    const db = new Database()
    const connection = await db.getConnection();
    
    user.name = body.name;
    user.email = body.email;
    user.phone = body.phone;
    user.config = body.config;

    await connection.manager.save(user);

    return user
  }
}