'use strict';

const pipe = (...fns) => {
    for (const fn of fns) {
        if(typeof fn != "function") throw new Error ("All arguments must be functions!");
    }

    return (x) => fns.reduce((acc, fn) => fn(acc), x);
}

    const inc = x => ++x;
    const twice = x => x * 2;
    const cube = x => x * x * x;

    const fn1 = pipe(inc, twice, cube);
    const fn2 = pipe(inc, inc);

module.exports = { pipe };
