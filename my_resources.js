// Exportable resources to demonstrate the use of import *

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = parseFloat((5/9 * (temp - 32)).toFixed(1));
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = parseFloat((5/9 * (updatedTemp - 32)).toFixed(1));
        }
    }
    return Thermostat;
}

export { makeClass };