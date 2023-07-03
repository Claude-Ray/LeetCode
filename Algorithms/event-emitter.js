class EventEmitter {
  subscribe(event, cb) {
    if (!this.map) this.map = {};
    if (!this.map[event]) this.map[event] = [];
    this.map[event].push(cb);
    return {
      unsubscribe: () => {
        const index = this.map[event].indexOf(cb);
        this.map[event].splice(index, 1);
      },
    };
  }

  emit(event, args = []) {
    if (!this.map || !this.map[event]) return [];
    return this.map[event].map(cb => cb(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
