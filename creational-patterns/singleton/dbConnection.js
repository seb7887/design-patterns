let dbcInstance = null;
global.DatabaseConnection = class DatabaseConnection {
  getUrl() {
    return 'mongod://localhost:27017/myproject';
  }

  getUsername() {
    return 'admin';
  }

  getConnection() {
    let connection;
    // do something;
    return connection;
  }

  getPassword() {
    return 'localhost';
  }

  static getInstance() {
    if (dbcInstance === null || dbcInstance.getConnection()) {
      dbcInstance = new DatabaseConnection();
    }
    return dbcInstance;
  }
}

const oSingle1 = DatabaseConnection.getInstance();
const oSingle2 = DatabaseConnection.getInstance();

console.log(`Are oSingle1 and oSingle2 the same instance? ${oSingle1 === oSingle2}`);
