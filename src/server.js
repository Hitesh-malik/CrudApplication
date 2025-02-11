import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 8080 });

server.on("connection", (ws) => {
  console.log("Client connected");

  const sendCoordinates = () => {
    const coordinates = { lat: (Math.random() * 90).toFixed(6), lon: (Math.random() * 180).toFixed(6) };
    ws.send(JSON.stringify(coordinates));
  };

  const interval = setInterval(sendCoordinates, 2000);

  ws.on("close", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

console.log("WebSocket server running on ws://localhost:8080");