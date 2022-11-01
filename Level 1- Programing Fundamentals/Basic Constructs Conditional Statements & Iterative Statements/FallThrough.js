/** Write a code to take a choice from user between 1 and 5,
 * and how the output as the number written in words.
 */

let choice = 2;

switch (choice) {
    case 1: 
        console.log ("One");
        break; // Break is telling JS that the case is over and it can now exit the Switch Case.
    case 2: 
        console.log ("Two");
        break;
    case 3: 
        console.log ("Three");
        break;
    case 4:
        console.log ("Four");
        break;
    case 5:
        console.log ("Five");
        break;
     default :
        console.log ("Invalid Input");

}