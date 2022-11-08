const data = [undefined, 2, 3, 4, 5, 'sd'];

function getArguments(...data) {
    if (data.length < 3)
    throw new Error();
    else if (data.length < 5) {
        console.log('Error');
    }
    else if (data[0] === undefined) {
        data[0] = 'error';
    }
    
    const arg = data.slice(0, 3);
    const newArg = arg.join('-');
    console.log(newArg)

    const array = data.slice(3, 6)
    let map = new Map();
    map.set('0', array[0]);
    map.set('1', array[1]);
    map.set('2', array[2]);
    let obj = Object.fromEntries(map.entries());

    console.log(obj)

    return data;
}
getArguments(...data);
