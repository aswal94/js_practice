const user = {
    id: 42,
    isVerified: true
};

const {id, isVerified} = user;

console.log(id);
console.log(isVerified);


// assigning new name
const o = {p:42, q:true};
const {p: foo, q:bar} = o;

console.log(foo);
console.log(bar);

// default value
const {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5