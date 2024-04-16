const express = require("express");
const productsRoutes = require("./src/products/routes");

const app = express();
const port = 8003;

app.use(express.json());

const cors = require("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res)=> {
    res.send("Hello point park University");
})

//API Route
// http://localhost:8003/api/v1.1/products
app.use("/api/v1/nepalSupermarket", productsRoutes);

app.listen(port, () => console.log('running on ${port}'));