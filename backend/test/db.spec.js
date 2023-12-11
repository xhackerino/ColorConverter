const connection = require('../src/db.js'); 

describe('MySQL Database Connection', () => {
   it('should successfully connect to the database', (done) => {
      done();
    });
});
  // Close the database connection after all tests
  after((done) => {
    connection.end((err) => {
      if (err) {
        done(err);
        return;
      }
      console.log('Closed the MySQL database connection.');
      done();
    });
  });