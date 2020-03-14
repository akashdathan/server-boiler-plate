
// import { verifyToken } from './utils';
// import { Action } from 'routing-controllers';
// import { User } from '../entities/user';
// import { Database } from '../utils/db';

// export default async function authMiddelware(action: Action, roles: string[]) {
//   const token = action.request.headers[ 'authorization' ];
//   if (token) {
//     const authObj = await verifyToken(token);
//     const { principalId } = authObj;

//     const db = new Database()
//     const connection = await db.getConnection();
//     const user = await connection.manager.findOne(User, { relations: ['role'], where : { principalId } });

//     if (!user) return false;

//     const { role } = user;
//     if (roles.includes(role.name)) {
//       action.request.principalId = principalId
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }

export enum ROLES {
  SUPER_ADMIN = 'SUPER_ADMIN',
  WRITE_ADMIN = 'WRITE_ADMIN',
  READ_ADMIN = 'READ_ADMIN',
  CLIENT = 'CLIENT'
}
