// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
const destructivelyAppendDriver=n=>drivers.push(n);
const destructivelyPrependDriver=n=>drivers.unshift(n);
const destructivelyRemoveLastDriver=_=>drivers.pop();
const destructivelyRemoveFirstDriver=_=>drivers.shift();
const appendDriver=n=>drivers.concat(n);
const prependDriver=n=>[n].concat(drivers);
const removeLastDriver=_=>drivers.slice(0,-1);
const removeFirstDriver=_=>drivers.slice(1);