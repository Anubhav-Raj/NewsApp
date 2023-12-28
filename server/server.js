const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 3001; // Choose any available port

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.get("/api/news", async (req, res) => {
  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: "Apple",
        from: "2023-12-01",
        sortBy: "popularity",
        apiKey: "9f1906d5ce6d4d6ca9d1d51c25c0d3c8", // Replace with your NewsAPI key
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
