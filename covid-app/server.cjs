// server.cjs
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/hospitals", async (req, res) => {
  try {
    const response = await axios.get(
      "https://dekontaminasi.com/api/id/covid19/hospitals"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Gagal fetch data rumah sakit" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
