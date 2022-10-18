// let's make a Tea.
// This is called as call Back Hell --> 
function addContainer (addMilk) {
    console.log ('Container Added');
    addMilk (addSugar);
}
function addSugar (addTea) {
    console.log ('Tea Addes');
    addTea ();
}
function addMilk (addSugar) {
    console.log ('Milk Added');
    addSugar (addTea);
}

function makeTea (addContainer) {
    addContainer ();
}
makeTea (addContainer);
