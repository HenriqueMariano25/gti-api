console.log("ola bebe e")

const customExpress = require('./config/customExpress')

const port = 3000

const app = customExpress()
app.listen(port, () => {console.log("Aplicação rodando na porta 3000")})