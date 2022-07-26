
const chai = require('chai');
const { expect } = require('chai');
const assert = require('assert');

const LogClass = require('../src/lib/util/log');
const Obj = require('../src/lib/util/obj');

const Log = new LogClass(__filename);


describe('Logging Test', () => {

    it('Sparta testing: ', (done) => {
        
        Log.debug("This is Sparta!! ");
        Log.info("This is Sparta!! ");
        Log.warn("This is Sparta!! ");
        Log.error("This is Sparta!! ");

        Log.log("This is Sparta!! ");
        
        done();
    });


    it('Object: ', (done) => {
        const obj={
            "test":"Name"
        };
        Log.error("Test: ", obj);
        
        done();
    });

});

