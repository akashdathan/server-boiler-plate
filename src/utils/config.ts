import * as dotenv from 'dotenv';

export class Config {
  static init() {
    dotenv.config();
    let path;
    switch (process.env.NODE_ENV) {
      case 'staging':
        path = `${__dirname}/../../.env.staging`;
        break;
      case 'production':
        path = `${__dirname}/../../.env.production`;
        break;
      default:
        path = `${__dirname}/../../.env.dev`;
    }
    dotenv.config({ path });
  }
}
