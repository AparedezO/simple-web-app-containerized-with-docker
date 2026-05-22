const express = require("express");

const app = express();
const host = "0.0.0.0";
const port = Number(process.env.PORT) || 3000;

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "simple web app running",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "not found",
  });
});

app.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`);
});
