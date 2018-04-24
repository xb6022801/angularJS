module.exports = class EventEmitter {
  constructor () {
    this.handlers = {}
  }

  on(eventType, fn) {
    if (typeof fn !== 'function')
      return
    if (!this.handlers[eventType]) {
      this.handlers[eventType] = []
    } 
    this.handlers[eventType].push(fn)
  }

  broadCast(eventType, args) {
    if (this.handlers[eventType]) {
      this.handlers[eventType].forEach(fn => {
        fn.apply(this, args)
      })
    }
  }
}