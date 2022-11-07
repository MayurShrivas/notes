/* 

* Defination of Promises :

Chaning of dependent operations.
    1.  FetchingUsers
    2.  Concatinating first and lastname.
    3.  Display.

*/


function fetchUsers () {
    return [
        {
            firstName : 'prince',
            lastName : 'pritam',
            course : 'BE-7'
        },
        {
            firstName : 'pallab',
            lastName : 'nandi',
            course : 'BE-7'
        },
        {
            firstName : 'hagnesh',
            lastName : 'kumar',
            course : 'BE-7'
        },
        {
            firstName : 'mayur',
            lastName : 'shrivas',
            course : 'BE-7'
        },
    ]
}

function fetchUserPromise () {
    return new Promise (function (resolve, reject) {
        setTimeout (() => {
            resolve (fetchUsers);
        }, 2000)
    })
}

function fetchEmployees () {
    return [
        {
            firstName : 'prince',
            lastName : 'pritam',
            course : 'BE-7'
        },
        {
            firstName : 'hagnesh',
            lastName : 'kumar',
            course : 'BE-7'
        },    
    ]
}

function fetchEmployeesPromise () {
    return new Promise (function (resolve, reject) {
        setTimeout (() => {
            resolve (fetchEmployees ());
        }, 3000)
    })
}

function concat(users) {
    let result = [];
    for (let user of users) {
        result.push (user.firstName + user.lastName);
    }
    return result;
      
}

function display (value) {
    console.log (value);
}

function performOpeartion () {
    // Promise.all ([fetchUserPromise (), fetchEmployeesPromise ()])
    Promise.any ([fetchUserPromise (), fetchEmployeesPromise ()]) 
    .then ((data) => {
    console.log(data);
    });
}

/* then accepts two function:
1. onFullfilled
2. onRejected
*/

/*
* 1. promise.all -->    1. promise.all is used to fetch all employees details
* 2. pronmise.any -->   1. if any of them resolves that will be passed next callback.
                        2. if every promise is rejected then the first rejected promise will be passed as onRejected.
* 3. promise.race -->   1. whichever promise resolve or rejects first will be passed as onFulfilled or onRejected. 
*/

performOpeartion ();

// onRejected example explained :
/*
function fetchUsers () {
    return {
        error : true
    }
}

function concat(users) {
    let result = [];
    for (let user of users) {
        result.push (user.firstName + user.lastName);
    }
    return result;
      
}

function display (value) {
    console.log (value);
}

function performOpeartion () {
    
    let promise = new Promise (function(resolve, reject) {
        setTimeout (() => {
            let users = fetchUsers ();
            if (!users.error) {
                resolve (users);
            } else {
                reject ('Error Occured');
            }            
        }, 2000);
    });

    promise.then ((data) => {  // when data is fullfilled then only this function will be called.
        return concat(data);
    }).then ((data) => {
        display (data);
    }, (error) => {
        console.log ('inside then error');
        return 'abc';
    }).catch ((error) => { // Catch will skip then part & directly grab the error portion.
        console.log ( error); 
    }).then ((data) => {
        console.log ('last then '+ data)
    });    
}
//performOpeartion ();  
*/