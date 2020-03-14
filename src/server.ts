import { createExpressServer } from 'routing-controllers';
import * as controllers from './controllers';
import { Config } from './utils/config';
import { serve, setup } from 'swagger-ui-express';
import { getswagger } from './utils/swagger';
// import AuthMiddleware from './middleware/auth';
import 'reflect-metadata';

Config.init();
const app = createExpressServer({
  // tslint:disable-next-line: no-any
  controllers: Object.values(controllers) as any,
  cors: true,
  // authorizationChecker: AuthMiddleware
});

const options = {
  customCss: '.swagger-ui .topbar { display: none }',
  authAction: { JWT: {name: "JWT", schema: {type: "apiKey", in: "header", name: "Authorization", description: ""}, value: "Bearer <JWT>"} },
  customSiteTitle: 'Docs'
};

app.use('/', serve, setup(getswagger(), options));

app.listen(3000);

// tslint:disable-next-line: no-console
console.log('server listening at port 3000 \u{1f389} \u{1f38a} \u{1f38a}');