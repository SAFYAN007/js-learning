let currency = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
let cash = 1567;
let payment = 653;
let change = calculate(payment, cash);

// console.log("Change:");
for (let i = 0; i < currency.length; i++) {
    let count = change.filter((note) => note === currency[i]).length;
    if (count > 0) {
        console.log(currency[i] + ": " + count);
    }
}

function calculate(payment, cash) {
    let rAmount = cash - payment;
    let change = [];

    for (let i = 0; i < currency.length; i++) {
        let currencyNotes = currency[i];
        while (rAmount >= currencyNotes) {
            if (rAmount >= currencyNotes) {
                change.push(currencyNotes);
                rAmount -= currencyNotes;
            } 
        }
    }
    return change;
}

