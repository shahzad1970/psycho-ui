class UiState {
    constructor() {
        this.state = {};
        this.subscribers = {};
    }

    static getInstance() {
        if (!UiState.instance) {
            UiState.instance = new UiState();
        }
        return UiState.instance;
    }

    get(key) {
        return this.state[key];
    }

    set(key, value) {
        this.state[key] = value;
        if (this.subscribers[key]) {
            this.subscribers[key].forEach(callback => {
                callback(value);
            });
        }
    }
    on(key, callback) {
        if (!this.subscribers[key]) this.subscribers[key] = [];
        if (this.subscribers[key].includes(callback)) return;
        this.subscribers[key].push(callback);
    }

}