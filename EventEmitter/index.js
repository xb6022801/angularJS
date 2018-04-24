var EventEmitter = require("./EventEmitter.js");

let broadCaster = Object.create(EventEmitter.prototype, {
  randomNumber: {
    writable: true,
    configurable: true,
    value: 1
  } 
})

broadCaster.handlers = {}

broadCaster.on('updateValue', function(initValue) {
  this.randomNumber = Math.round(Math.random()) + initValue
  console.log('updateValue' + this.randomNumber)
})

broadCaster.broadCast('updateValue', 15)
