function even(number) {
    return number / 2;
}

function odd(number) {
    return number * 3 + 1;
}

const startValue = process.argv[2];
const endValue = process.argv[3];
const total = endValue - startValue;
const percent = Math.round(total / 10);
let percentage = 0;
let value;
let iterations;
//let results = {};
let results = [];

console.error(`Calculating ${total} numbers`)

for (let i = startValue; i <= endValue; i++) {
    iterations = 0;
    value = i;

    while (value != 1) {
        iterations = iterations + 1;

        if (value % 2 == 0) {
            value = even(value);
        } else {
            value = odd(value);
        }
    }

//    if (i % percent == 0) {
//        percentage = percentage + 10;
//        console.error(`${percentage}%`);
//    }
/*
    if (results[iterations]) {
        results[iterations] += 1;
    } else {
        results[iterations] = 1;
    }
*/
/*
    results.push({
        i,
        iterations
    });
*/
    //if (iterations > 300) {
        console.log(iterations);
    //}
}

/*
console.log(Object.keys(results).reduce((prev, curr) => {
    return `${prev}${curr}, ${results[curr]}\n`
}, ''));
*/
/*
results.forEach((obj) => {
    console.log(`${obj.iterations}`);
});
*/