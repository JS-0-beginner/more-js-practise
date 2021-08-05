/// node interest.js \\\

console.log('');

function balance(pricipal,interest,time)
{
    var interestOnTime = pricipal * interest * time;
    console.log('Investment :',pricipal,'$');
    console.log('Interest Offer :',interest,'% (per-year)');
    console.log('Time :',time,'Years');
    var totalBalance = pricipal + interestOnTime;
    return totalBalance;
}

pricipal = 5000;
interest = 0.07;
time = 5;

var totalBalance = balance(pricipal,interest,time);
console.log('');
console.log('Total Balance with Interest :',totalBalance.toFixed(2),'$');