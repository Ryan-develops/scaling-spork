/// Input a number and return metric AND imperial unit in length/vol/mass
/// toFixed(3) to round off 3 digits

/// Approx result for meter into foot - multiply length value by 3.281
/// Approx result for foot into meter - divide length value by 3.281

/// Approx result for litre into gallon - multiply volume value by 4.546
/// Approx result for gallon into litre - divide volume value by 4.546

/// Approx result for kg into pounds - multiply volume value by 2.205
/// Approx result for pounds into kg - divide volume value by 2.205

let num = document.getElementById("unit-display")
let conversionL = document.getElementById("length")
let conversionV = document.getElementById("volume")
let conversionM = document.getElementById("mass")


meters = num.textContent
feet = num.textContent
litres = num.textContent
gallons = num.textContent
kg = num.textContent
pounds = num.textContent

function convertLength() {
    metersToFeet = num.textContent * 3.281
    feetToMeters = num.textContent / 3.281
}

convertLength()

function convertVolume() {
    litresToGallons = num.textContent / 4.546
    gallonsToLitres = num.textContent * 4.546
}

convertVolume()


function convertMass() {
    kgToPounds = num.textContent * 2.205
    poundsToKg = num.textContent / 2.205
}

convertMass()

function displayResults() {
    conversionL.textContent = meters + " meters = " + metersToFeet.toFixed(3) + " feet | " + feet + " feet = " + feetToMeters.toFixed(3) + " meters"
    conversionV.textContent = litres + " litres = " + litresToGallons.toFixed(3) + " gallons | " + gallons + " gallons = " + gallonsToLitres.toFixed(3) + " litres"
    conversionM.textContent = kg + " kg = " + kgToPounds.toFixed(3) + " pounds | " + pounds + " pounds = " + poundsToKg.toFixed(3) + " kg"
}

displayResults()