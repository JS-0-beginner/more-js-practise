/// node fahrenheit.js \\\

function fahrenheit(celsius)
{
    var cels = (celsius * (9/5)) + 32;
    return cels;
}

var givenCels = fahrenheit(30);
console.log(givenCels,'°F');