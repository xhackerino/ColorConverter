//const expect = require('chai').expect;
//const http = require('http');
////const app = require('../src/main.js');
//
//describe('Testing REST API', () => {
//    let server;
//
//    before((done) => {
//        // Start the server
//        server = app.listen(3000, () => {
//            done();
//        });
//    });
//
//    it('should return status 200 from the /hello endpoint', (done) => {
//        request(server)
//            .get('/hello')
//            .expect(200, (err) => {
//                // Close the server after the /hello endpoint test
//                server.close(() => {
//                    done(err);
//                });
//            });
//    });
//
//    // Add more test cases as needed
//
//    // The after block will run after all tests have been executed
//    after((done) => {
//        // Stop the server (this may not be necessary if you stop it in each test)
//        server.close(() => {
//            done();
//        });
//    });
//});
//