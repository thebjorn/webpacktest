
import $ from 'jquery';
import __version__ from './version';
import core from "./core";

let dk = selector => document.querySelector(selector);

Object.assign(dk, {
    __version__,
    core,

    ready(fn) { $(fn); }
});

module.exports = dk;
