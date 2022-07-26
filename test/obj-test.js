const chai = require('chai');
const { expect } = require('chai');
const assert = require('assert');

const Obj = require('../src/lib/util/obj');

/**
 * Asert Doc
 * https://www.w3schools.com/nodejs/ref_assert.asp
 */

describe('Obj Tests', () => {
    it('Join', (done) => {

        const array=["uno","dos"];
        const ret=Obj.join(array,",");

//        console.log("Ret: "+ret);
        
        assert.strictEqual("uno,dos", ret);

        
        done();
    });

    it('Not Equal Join', (done) => {

        const array=["uno","dos"];
        const ret=Obj.join(array,",");

//        console.log("Ret: "+ret);
        
        assert.notEqual("uno dos", ret);

        
        done();
    });

    it('Get value null', (done) => {
        const ret=Obj.get(null,null,null);

        assert.strictEqual(null, ret);

        done();
                
    });

    it('Get value null', (done) => {
        const ret=Obj.get(null,"pepe",null);

        assert.strictEqual(null, ret);

        done();
                
    });

    it('Get value null', (done) => {
        const ret=Obj.get({},"pepe",null);

        assert.strictEqual(null, ret);

        done();
                
    });

    it('Get value', (done) => {
        const ret=Obj.get({"name":"pepe"},"name",null);

        assert.strictEqual("pepe",ret);

        done();
                
    });

    it('Get value path', (done) => {
        const ret=Obj.get(
            {
                "persona": {
                    "nombre": "angel mendo"
                }
            },
            "persona.nombre",
            null);
        
        assert.strictEqual("angel mendo",ret);

        done();
                
    });


    it('Get log ', (done) => {
        const obj={
            "persona": "angel mendo"
        };
        
        Obj.log(obj);

        // assert.strictEqual(Obj.log(obj),"angel mendo");

        done();
                
    });
    
    
});

