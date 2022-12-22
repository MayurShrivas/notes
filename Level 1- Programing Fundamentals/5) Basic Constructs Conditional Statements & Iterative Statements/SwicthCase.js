// You are asking user to enter a choice.
// Press 1 to talk in English, Press 2 to talk in Japanes, Press 3 to talk in Chines.

let choice = 2; // This is the number that your user is entering.

switch (choice) {
    case 1:
        console.log ("You have chosen English");
        break;
    case 2:
        console.log (" You have chosen Japanes");
        break;
    case  3:
        console.log (" You have chosen Chines");
        break;
    default:
        console.log ("Invalid Input")         
}