var a = 2;
var b = 1;
// a is the number getting added, b is the number being added and f is the sum of a and b.
var interval = 0.5;
// How long until the next number gets printed (in seconds, I'll show you why on line 11)
console.log(`\n\n\n\n\n\n\n\n\n\n\n\nHarry's 2048 Sequence Script\n\n\n\n\n\n\n\n\n\n\n\n`);
setTimeout(function () {
  console.log("Enjoy! :D\n");
}, 1000);

setTimeout(function () {
  console.log(a);
}, 1000);
setTimeout(function () {

  (function tzfe() {
      b = a + a;
      console.log(b);
      a = b;
      setTimeout(tzfe, (interval * 1000));
      // The reason why I said "interval * 1000" is because seconds are easier to handle then milliseconds.
  })();
}, 1000);
