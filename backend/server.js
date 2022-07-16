const { parse } = require("dotenv")
const express = require("express")
const { errorHandler } = require("./middleware/errorMiddleware")

const dotenv = require("dotenv").config()
const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/goals", require("./routes/goalRoutes"))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Express Server running on Port: ${PORT} `))
