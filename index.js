'use strict';

var EVENTS = require("events");
var events = new (EVENTS.EventEmitter || EVENTS);
var cache = {};

/* Set and/or return a namespace.
*/
function AISLE(namespace,data){
  
  // AISLE()
  if(namespace === undefined) return require.main.exports;
  
  // AISLE(namespace,data)
  if(data !== undefined) cache[namespace] = data;
  
  // AISLE(namespace)
  // AISLE(namespace,data)
  if(cache[namespace] !== undefined) return cache[namespace];
  
  return undefined;
  
}

/* Connect our AISLE to our events.
*/
for(var z in events) if(typeof events[z] === "function") AISLE[z] = events[z];

module.exports = AISLE;

