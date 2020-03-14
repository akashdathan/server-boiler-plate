import { createConnection, getConnectionManager, ConnectionManager, getConnectionOptions } from 'typeorm';
import { join } from 'path';

const CONNECTION_NAME = 'default';

export class Database {

  private connectionManager : ConnectionManager

  constructor() {
    this.connectionManager = getConnectionManager();
  }

  async getConnection() {
    if (this.connectionManager.has(CONNECTION_NAME)) {
      const connection = this.connectionManager.get(CONNECTION_NAME);

      return connection.isConnected ? connection : connection.connect();
    }

    const connectionOptions = await getConnectionOptions();

    Object.assign(connectionOptions, { entities: [ join(__dirname, '../entities/**/*{.ts,.js}') ] });
    return createConnection(connectionOptions);
  }
}
