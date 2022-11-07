async  function fetchUsers () {
    return [
        {
            firstName : 'Prince',
            lastName : 'Pritam',
            course : 'BE-7'
        },
        {
            firstName : 'Pallab',
            lastName : 'Nandi',
            course : 'BE-7'
        },
        {
            firstName : 'Hagnesh',
            lastName : 'Kumar',
            course : 'BE-7'
        },
        {
            firstName : 'Mayur',
            lastName : 'Shrivas',
            course : 'BE-7'
        },
    ]
}

async function concat(users) {
    let result = [];
    for (let user of users) {
        result.push (user.firstName + user.lastName);
    }
    return result;
      
}

async function display (value) {
    console.log (value);
}

async function performOpeartion () {
    let users = await fetchUsers (); // await is only use with async function. cannot used without async
    let concatenated = await concat (users);
    await display (concatenated);
}

performOpeartion ();
console.log ('Hey Boy');

