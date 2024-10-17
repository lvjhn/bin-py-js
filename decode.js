const fs = require("fs")

function roundToDecimals(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}

const data          = fs.readFileSync("items.bin")
const items_f32     = new Float32Array(
    data.buffer, 
    data.byteOffset, 
    data.byteLength / Float32Array.BYTES_PER_ELEMENT
);

const items = Array.from(items_f32)

console.log(items.map(x => roundToDecimals(x, 5)))