// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
    constructor(initialState = {}) {
        this.state = initialState;
    }
    setState(change) {
        // YOUR CODE
        const targetKey = Object.keys(change);
        for (let key in this.state) {
            if (key === targetKey) {
                console.log("key is", key)
                this.state[key] = change[targetKey];
            }
        }
        return this.state
    }
}

module.exports = { StatefulThing };