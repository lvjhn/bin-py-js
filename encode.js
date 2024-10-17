const fs = require("fs")


let items         = [1.1, 2.2, 3.3, 4.4, 5.5]

const f32a          = new Float32Array(items)
const bytes         = new Uint8Array(f32a.buffer)

fs.writeFileSync("items.bin", bytes, { encoding: "binary" })

