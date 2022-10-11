
import * as myResources from "./my_resources.js";

const Thermostat = myResources.makeClass();
let thermos = new Thermostat(76);
console.log(thermos);       // Thermostat { _temp: 24.4 }
console.log(thermos.temperature);   // 24.4
thermos.temperature = 100;
console.log(thermos.temperature);   // 37.8

