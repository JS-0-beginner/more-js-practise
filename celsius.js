/// node celsius.js \\\

console.log('');

function celsius(fahrenheit)
{
    var givenFahrenheit = (fahrenheit - 32) * 5/9;
    return givenFahrenheit;

}

var givenFahrenheit = celsius(182);
console.log(givenFahrenheit.toFixed(2),'°C');