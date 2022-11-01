// Easy Solution : 

for (let i = 0; i < 100; i = i + 2) // i = i + 2; i += 2
{
    console.log (i);
}

// Complicated Solution :

for(let i = 0; i < 100; i++)
{
    if(i % 2 === 0) // The remainder on dividing a number by 2 is 0.
    {
        console.log (i);
    }
}
