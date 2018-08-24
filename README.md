# webpacktest

Testing various packaging options for webpack.

# export/import

default exports:

    export default foo;  ==> import foo from '...';

non-default exports:

    export function a() {..}
    export function b() {..} 

    import * as lib from '..';  lib.a(..); lib.b(..);
  
    import {a, b} from '..'; a(..); b(..);
 
 src/index.js:
 
    import ... from '...';
    
    module.exports = {..}
