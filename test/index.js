import axios from 'axios';
import assert from 'assert';

// import server from '../lib/index.js';

describe('Node Server with ES6', () => {
    it('Status code return 200', done => {
        const res = await axios.get(`http://localhost:${process.env.SERVER_PORT}`);
        assert.equal(200, res.statusCode);
        // server.close();
        done();
    });
});