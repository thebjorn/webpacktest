
import jQuery from 'jquery';
// const dk = require('../dist/dk.js');
import dk from '../src';

test("check sub module path", async () => {
    console.log(dk);
    expect(dk.core.core_three()).toEqual("core3");
});
