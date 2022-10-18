// async = make a function async. It will not wait for the await.

/*
async function addContainer () {
    return 'Container Added';
}

async function addSugar () {
    console.log ('Tea Added');
}

function addTea () {
    return 'Tea Added';
}

function addMilk () {
    console.log ('Milk Added');
}

let promise = addContainer ().then((onFulfilled, onRejected) => {
    console.log (onFulfilled)
}); // here async is returning promises
*/


// Await :-
// Await = wait for async value to get completed & then return value after it get completed.

async function addContainer () {
    return 'Container Added';
}

async function addSugar () {
    return 'Tea Added';
}

async function addMilk () {
    return 'Milk Added';
}

async function makeTea () {
    let container = await addContainer (); // waits to complete this step then it will move to addMilk.
    let milk = await addMilk ();
    let sugar = await addSugar ();
    console.log (container + milk + sugar);
}
makeTea (); // await is only valid in async function & the level bodies of modules.
console.log ('Hello');
