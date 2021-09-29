let a, b, rest;

[a, b] = [10, 20];

console.log(a); // expected 10
console.log(b); // expected 20
//-------------------------------------

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); // expected: Array [30, 40, 50]
//-------------------------------------

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); // expected: Array [30, 40, 50]
//-------------------------------------


({a, b} = {a: 10, b: 20});
console.log(a); // expected 10
console.log(b); // expected 20

// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a);     // 10
console.log(b);     // 20
console.log(rest);  // {c: 30, d: 40}


const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
console.log(red);
console.log(yellow);
console.log(green);

let a1, b1;
[a1, b1] = [1, 2];
console.log(a1);
console.log(b1);

let a3, b4;

[a4 = 5, b4 = 7] = [1];
console.log(a4); // 1
console.log(b4); // 7

///

function f(){
    return [1, 2,4];
}

const [q, w] = f();
console.log(q);
console.log(w);