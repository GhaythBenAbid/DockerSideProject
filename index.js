const express = require("express");
const cors = require("cors");


const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req, res) => {
    res.send("test from docker 🐳");
}),


app.listen(port, () => {
    console.log("listening on port 5000");
});
