import EventEmitter from 'events';

export default class State {
    constructor(state = {}) {
        const proxy = new Proxy(state, this);

        this._pendingTimeout = null;
        this._pendingChanges = {};
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

        this._queueChange(key, {
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
            this._queueChange(key, undefined);
        }
        return true;
    }
    enumerate(state) {
        return Object.keys(state);
    }
    ownKeys(state) {
        return Object.keys(state);
    }
    _queueChange(key, change) {
        clearTimeout(this._pendingTimeout);

        if (key in this._pendingChanges && this._pendingChanges[key].oldValue === change.value) {
            delete this._pendingChanges[key];
        } else {
            this._pendingChanges[key] = change;
        }

        this._pendingTimeout = setTimeout(() => {
            this._pendingTimeout = null;

            this._emitChanges(this._pendingChanges);

            this._pendingChanges = {};
        }, 0);
    }
    _emitChanges(changes) {
        const keys = Object.keys(changes);

        if (keys.length === 0) {
            return;
        }

        keys.forEach(key => this._emitter.emit(`change:${key}`, changes[key]));

        this._emitter.emit('change', changes);
    }
};