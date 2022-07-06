function log() {
  try {
    doRequest();
  } catch (error) {
    logRepostitory.saveLog(error);
  }
}

class ConnectionPool {
  available: any;

  getConnection() {
    const connection = this.available.isEmpty()
      ? (new Connection())
      : this.available.pop();
    return connection;
  }
}
