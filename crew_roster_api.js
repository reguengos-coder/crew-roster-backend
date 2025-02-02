const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const pilots = [
    { id: 1, name: "John Doe", category: "Captain" },
    { id: 2, name: "Jane Smith", category: "First Officer" }
];

app.get("/pilots", (req, res) => {
    res.json(pilots);
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));