const convertBtn = document.querySelector("#convert_btn");
const inputValue = document.querySelector("#input_value");

const length = document.querySelector("#mf");
const volume = document.querySelector("#lg");
const mass = document.querySelector("#kp");

convertBtn.addEventListener("click", function() {
    const text = inputValue.value;
    let value = parseFloat(text);
    setLength(value);
    setVolume(value);
    setMass(value);
});

const meterToFeet = 3.281;
const feetToMeter = 0.305;

const literToGallon = 0.264;
const gallonToLiter = 3.785;

const kgToPound = 2.204;
const poundToKg = 0.454;

function setLength(value) {
    let mtf = Number( (meterToFeet * value).toFixed(3));
    let ftm = Number( (feetToMeter * value).toFixed(3));

    length.textContent = 
    `${value} meter = ${mtf} feet | ${value} feet = ${ftm} feet`
}

function setVolume(value) {
    let ltg = Number( (literToGallon * value).toFixed(3));
    let gtl = Number( (gallonToLiter * value).toFixed(3));

    volume.textContent = 
    `${value} liter = ${ltg} gallon | ${value} gallon = ${gtl} liter`
}

function setMass(value) {
    let ktp = Number( (kgToPound * value).toFixed(3));
    let ptk = Number( (poundToKg * value).toFixed(3));

    mass.textContent = 
    `${value} kg = ${ktp} pound | ${value} pound = ${ptk} kg`
}