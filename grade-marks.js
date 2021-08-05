/// node grade-marks.js \\\

function grade(marks)
{
    if(marks>=80 && marks<=100)
    {
        let aPlus = 'Congrats! You got A+';
        return aPlus;
    }
    else if(marks>=70 && marks<=79)
    {
        let aGeneral = 'Nice! You got [A]';
        return aGeneral;
    }
    
    else if(marks>=60 && marks<=69)
    {
        let aMinus = 'Not bad at all, You got [A-]';
        return aMinus;
    }
    else if(marks>=50 && marks<=59)
    {
        let bGeneral = 'Not so good, You got [B]';
        return bGeneral;
    }
    else if(marks>=40 && marks<=49)
    {
        let cGeneral = 'Better luck next time, You got [C]';
        return cGeneral;
    }
    else if(marks>=33 && marks<=39)
    {
        let dGeneral = 'Very Bad! You got [D]';
        return dGeneral;
    }
    else if(marks<33)
    {
        let fail = 'Go home, your mama will beat the hell out on you, because you got [F]'
        return fail;
    }
    else
    {
        let inappropriate = "Sorry this is not an appropriate mark, enter a valid one.";
        return inappropriate;
    }
    
}

var result = grade(90);
console.log(result);