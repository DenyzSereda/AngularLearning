// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    var counter = 0;
    var aPermanent = 0;

    var text = '';
    while (N >= 1) {
        var remainder = N % 2;
        if (remainder == 1) {
            text = '1' + text;
            if (counter > aPermanent) {
                aPermanent = counter;
            }
            counter = 0;
        } else {
            text = '0' + text
            counter += 1;
        }
        N = Math.floor(N / 2);
    }


    return aPermanent;
}
