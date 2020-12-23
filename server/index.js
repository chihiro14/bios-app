const express = require("express")
const app = express()

app.get("/api", function (req, res) {
  res.json([{
    id: 1, name: "aaa"
  }])
})

app.listen(9999)