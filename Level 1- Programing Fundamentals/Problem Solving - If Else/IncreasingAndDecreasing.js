/** 
 * In case of Increasing Sequence : a < b < c ==> a < b AND b < c
 *  AND in JS written as '&&'
 * In case of Decreasing Sequence : a > b > c. 
 * 
 * a < b > c
 */

// Solution : 1
const a = 12;
const b = 45;
const c = 87;

if(a < b)
{
    if(b < c) 
    {
        console.log ("Increasing Order")
    } 
    else 
    {
        console.log ("Neither increasing nor Decreasing.")
    }
}
else if(a > b)
{
    if (b > c) 
    {
        console.log (" Decreasing Order")
    } 
    else 
    {
        console.log ("Neither increasing nor Decreasing.")
    } 
}
else // Use this condition when Input is --> 1, 1, 1
{
    console.log ("Neither Increasing nor Decreasing")
}

console.log ("------------------------------------------------------------------------------")

// Solution : 2
const x = 102,y = 60,z = 35;
if (x < y && y < z) 
{
    console.log ("Increasing Order");
} else if (x > y && y > z) 
{
    console.log ("Decreasing Order")
} else 
{
    console.log ("Neither Increasing nor Decreasing");
}
