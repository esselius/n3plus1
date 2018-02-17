use std::env;

fn even(n: i64) -> i64 {
    return n / 2;
}

fn odd(n: i64) -> i64 {
    return n * 3 + 1;
}

fn is_even(n: i64) -> bool {
    return n % 2 == 0
}

fn calculate(n: i64) -> i64 {
    let mut current = n;
    let mut iterations = 0;

    while current > 1 {
        iterations += 1;

        if is_even(current) {
            current = even(current);
        } else {
            current = odd(current);
        }
    }

    if n % 10000 == 0 {
        println!("{} {}", n, iterations);
    };

    return n;
}

fn main() {
    let args: Vec<String> = env::args().collect();

    let num = &args[1];
    let number: i64 = match num.parse() {
        Ok(n) => {
             n
        },
        Err(_) => {
            return;
        },
    };

    for x in 1..number {
        calculate(x);
    }
}
