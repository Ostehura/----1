class WelcomeClass {
    _name = "";

    constructor(name) {
        this._name = name;
    }

    getGreeting() {
        return 'Welcome, ' + this._name;
    }

}

module.exports.WelcomeClass = WelcomeClass