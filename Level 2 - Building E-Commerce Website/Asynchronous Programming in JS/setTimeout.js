// First In First Out :-

setTimeout (() => {
    console.log ('First Outside');
    setTimeout ( () => {
        console.log ('First Inside');
    }, 1000);
}, 1000);

setTimeout (() => {
    console.log ('Second Outside');
    setTimeout ( () => {
        console.log ('Second Inside');
    }, 1000);
}, 1000);
