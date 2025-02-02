const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const pilots = [
  { id: 1, name: "John Doe", category: "Captain" },
  { id: 2, name: "Jane Smith", category: "First Officer" }
];

const flights = {
  1: [
    { id: 101, flight_number: "KL123", origin: "AMS", destination: "LIS", date: "2025-02-02" },
    { id: 102, flight_number: "KL456", origin: "LIS", destination: "AMS", date: "2025-02-05" }
  ],
  2: [
    { id: 201, flight_number: "KL789", origin: "CDG", destination: "AMS", date: "2025-02-10" }
  ]
};

// Endpoint para obter todos os pilotos
app.get("/pilots", (req, res) => {
  res.json(pilots);
});

// ✅ Novo Endpoint para obter voos de um piloto específico
app.get("/pilots/:id/flights", (req, res) => {
  const pilotId = parseInt(req.params.id);
  res.json(flights[pilotId] || []);
});

// Iniciar servidor
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});