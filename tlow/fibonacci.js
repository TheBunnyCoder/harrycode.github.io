let setAmount = false;
var amount = 1;

if (process.argv[2] === "--about") {
  console.log("Harry's Fibonacci Sequence Script\nMade with love by Harry on 16 December 2017");
  process.exit();
} else if (process.argv[2] === "--amount") {
  setAmount = true;
  amount = process.argv[3];
} else if (process.argv[2] === "--help") {
  console.log(`\nCommand List\n\n--help:          Brings up this list\n--about          Shows the about page\n--amount n       Print only a certain amount instead of printing indefinitely.\n`);
  process.exit();
}

var a = 0,
  b = 1,
  f = 1;
// a is the number getting added, b is the number being added and f is the sum of a and b.
var interval = 0.5;
// How long until the next number gets printed (in seconds, I'll show you why on line 11)
console.log(`\n\n\n\n\n\n\n\n\n\n\n\nHarry's Fibonacci Sequence Script\n\n\n\n\n\n\n\n\n\n\n\n`);
setTimeout(function() {
  console.log("Enjoy! :D");
}, 1000);

setTimeout(function () {
  console.log(1);
setTimeout(function() {

  if (setAmount) {
    setTimeout(function() {
      for (var i = 0; i < amount - 1; i++) {
        f = a + b;
        // The sum of a and b is now f
        a = b;
        // We push b down to a, not make it the same...
        b = f;
        // ...because b is now f. And so the cycle repeats.
        console.log(f);
        // The reason why I said "interval * 1000" is because seconds are easier to handle then milliseconds.
      }
      console.log(`First ${process.argv[3]} fibonacci numbers printed.`);
    }, 1000);

  } else {
    setTimeout(function() {
      (function fib() {
        f = a + b;
        // The sum of a and b is now f
        a = b;
        // We push b down to a, not make it the same...
        b = f;
        // ...because b is now f. And so the cycle repeats.
        console.log(f);
        setTimeout(fib, (interval * 1000));
        // The reason why I said "interval * 1000" is because seconds are easier to handle then milliseconds.
      })();
    }, 1000);
  }
}, 1000);
}, 1000);
