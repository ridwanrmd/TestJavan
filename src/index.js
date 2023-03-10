require("dotenv/config");
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");

// Config
app.use(cors());
app.use(express.json());

//Routers
const userRouter = require("./routers/user");
const productRouter = require("./routers/product");
const userAssetRouter = require("./routers/userAsset");

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/assets", userAssetRouter);

// Connection Test
app.get("/api", (req, res) => {
  res.send(`Hello, this is my API`);
});

// Error Controler
app.use((error, req, res, next) => {
  console.log({ error });
  const errorObj = { status: "ERROR", message: error.message, detail: error };
  const httpCode = typeof error.code == "number" ? error.code : 500;
  res.status(httpCode).send(errorObj);
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(`ERROR: ${error.message}`);
  } else {
    console.log(`API RUNNING at PORT: ${PORT} ✅`);
  }
});
