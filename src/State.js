import EventEmitter from 'events';

export default class State {
    constructor(state = {}) {
        const proxy = new Proxy(state, this);

        this._emitter = new EventEmitter();

        this.addEventListener = this._emitter.addListener.bind(this._emitter);
        this.removeEventListener = this._emitter.removeListener.bind(this._emitter);

        return proxy;
    }
    get(state, key) {
        switch (key) {
            case 'addEventListener':
                return this.addEventListener;
            case 'removeEventListener':
                return this.removeEventListener;
            default:
                return state[key];
        }
    }
    set(state, key, value) {
        if (state[key] === value) {
            return true;
        }

        this._emitChanges(key, {
            value,
            oldValue: state[key],
            type: key in state ? 'change' : 'add',
        });

        state[key] = value;

        return true;
    }
    has(state, key) {
        return key in state;
    }
    deleteProperty(state, key) {
        if (key in state) {
            delete state[key];
            this._emitChanges(key, undefined);
        }
        return true;
    }
    enumerate(state) {
        return Object.keys(state);
    }
    ownKeys(state) {
        return Object.keys(state);
    }
    _emitChanges(key, change) {
        this._emitter.emit(`change:${key}`, change);
        this._emitter.emit('change', {
            [key]: change
        });
    }
};