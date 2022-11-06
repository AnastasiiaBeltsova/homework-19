"use strict";

var data = [undefined, 2, 3, 4, 5, 'sd'];
function getArguments(a, b) {
  if (data.length < 5) {
    console.log('Error');
  } else if (data[0] === undefined) {
    data[0] = 'error';
  }
  var arg = data.slice(0, 3);
  var newArg = arg.join('-');
  console.log(newArg);
  var array = data.slice(3, 6);
  var map = new Map();
  map.set('0', array[0]);
  map.set('1', array[1]);
  map.set('2', array[2]);
  var obj = Object.fromEntries(map.entries());
  console.log(obj);
  return data;
}
getArguments(data);