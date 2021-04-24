'use strict'

const nothing = new Int32Array(
      new SharedArrayBuffer(32)
);



exports.sleep = function (time) {
    if(
        (typeof time !== 'number')
    )
        return false;
    Atomics.wait(
        nothing, 
        0, 
        0, 
        Math.abs(time)
    );
};

