import http from 'http';
import assert from 'assert';

// describe('Node Server with ES6', () => {
//     it('Status code return 200', (done) => {
//         http.get(`http://localhost:${process.env.SERVER_PORT}`, (res) => { done(); })
//         assert.equal(200, res.statusCode);
//         done();
//     });
// });

describe('Testing async', function(){
	it('...get google page', function(done){
		http.get(`http://localhost:${process.env.SERVER_PORT}`, function(res){
			done();
		}).on('error', function(e){
			assert.fail(e);
		})
	});
});