// // Promises are decoupling of CallBacks.

// function addContainer () {
//     console.log ('Container Added');
// }

// function addSugar () {
//     console.log ('Tea Added');
// }

// function addTea () {
//     console.log ('Tea Added');
// }

// function addMilk () {
//     console.log ('Milk Added');
// }

// function makeTea () {
//     new Promise (function (resolve, reject) {
//         resolve (addContainer ()); 
//         reject (() => console.log ('Error Occured while making Tea'));
//     }).then ((onFulfilled, onRejected) => {
//         if(!onRejected) {
//             addMilk ();
//         }
//     }).then((onFulfilled, onRejected) => {
//         if(!onRejected) {
//             addTea ();
//         }       
//     })
// }
// makeTea ();

// solution from return -->


function addContainer () {
    return 'Container Added';
}

function addSugar () {
    return 'Tea Added';
}

function addTea () {
    return 'Tea Added';
}

function addMilk () {
    return 'Milk Added';
}

function makeTea () {
    new Promise (function (resolve, reject) {
        resolve (addContainer ()); // Whatever function inside the resolve will return that would be passed to next 'then'.
        reject ((error) => console.log ('Error Occured while making Tea', error)); // If there is any error inside resolve it will be passed to resolve & whatever return from reject will be passed to onRejected. 
    }).then ((onFulfilled, onRejected) => {
        if(!onRejected) {
            return onFulfilled + addMilk ();
        }
    }).then((onFulfilled, onRejected) => {
        return Error ('Hey i am error');
        if(!onRejected) {
            return onFulfilled + addTea ();
        }       
    }).then ((onFulfilled, onRejected) => {
        console.log (onFulfilled);
    })
}
makeTea ();
console.log ('Bye');

