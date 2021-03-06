const express = require('express')
const consign = require('consign')
const cors = require('cors')

module.exports = () => {
    const app = express()

    app.use(cors())
    consign().include('routers').into(app)

    return app
}
