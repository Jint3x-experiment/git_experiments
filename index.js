import test from "./test.mjs";

test();

function diff(a, b) {
    return a - b;
}



function add(a, b) {
    return a + b;
}


  

// Better.

exports.diff = diff;
exports.add = add;
