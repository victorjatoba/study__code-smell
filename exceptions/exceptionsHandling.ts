function log() {
  try {
    doRequest();
  } catch (error) {
    console.log(error);
  }
}

class ConnectionPool {
  available: any;
  
  getConnection() {
    connection: Connection;
    try {
      connection = this.available.pop();
      return connection
    } catch (error) {
      connection = new Connection();
      return connection;
    }
  }
}