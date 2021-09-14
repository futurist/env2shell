#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
// usage: npx envexport > env.sh
function main() {
    try {
        const env = JSON.parse(fs.readFileSync(process.argv[2] || "env.json", 'utf8'))
        const sh = Object.entries(env).map(([a, b]) => "export " + a + "=" + JSON.stringify(b)).join("\n")
        console.log(sh)
    } catch(e) {
        console.error(e.message)
        process.exit(1)
    }
}

module.exports = main

if (require.main == module) {
    main()
}

