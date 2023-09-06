'use strict';

//https://www.hackerrank.com/challenges/the-birthday-bar/problem

let si = [4];
let di = 4;
let mi = 1;

function birthday(s, d, m) {
    let ways = 0;

    for(let i = 0 ; i <= s.length - m ; i++){
        let pair = s.slice(i,i + m);
        pair.reduce((a, b) => a + b, 0) === d ? ways++ : {};
    }

    return ways;
}

console.log(birthday(si,di,mi))