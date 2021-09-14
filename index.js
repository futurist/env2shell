#!/usr/bin/env node

// usage: npx envexport > env.sh
function main() {
    const env = require(process.argv[2] || "./env.json")
    const sh = Object.entries(env).map(([a, b]) => "export " + a + "=" + JSON.stringify(b)).join("\n")
    console.log(sh)
}

module.exports = main

if (require.main == module) {
    main()
}

