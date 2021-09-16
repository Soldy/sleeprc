'use strict'

const nothing = new Int32Array(
      new SharedArrayBuffer(32)
);



exports.sleep = function (time) {
    if(!Number.isInteger(time))
        throw TypeError('time is not an integer');
    Atomics.wait(
        nothing,
        0,
        0,
        Math.abs(time)
    );
};

