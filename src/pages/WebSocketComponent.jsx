// import { useEffect, useState } from "react";
// import { Client } from "@stomp/stompjs";

// const WebSocketComponent = () => {
//   const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
//   useEffect(() => {
//     const client = new Client({
//       brokerURL: "ws://localhost:8080", 
//       debug: (msg) => console.log("[STOMP Debug]:", msg),
//       reconnectDelay: 5000,
//       heartbeatIncoming: 4000,
//       heartbeatOutgoing: 4000,
//       onConnect: () => {
//         console.log("Connected to WebSocket");

//         // Subscribe to coordinate updates
//         client.subscribe("/topic/coordinates", (message) => {
//           const data = JSON.parse(message.body);
//           console.log("Received Coordinates:", data);
//           setCoordinates(data);
//         });
//       },
//       onStompError: (frame) => {
//         console.error("[STOMP Broker Error]:", frame.headers.message);
//       },
        
//     });

//     client.activate();

//     return () => {
//       client.deactivate().then(() => console.log("Disconnected from WebSocket"));
//     };
//   }, []);

//   return (
//     <div>
//       <h2>Real-time Coordinates</h2>
//       <p>Latitude: {coordinates.lat}</p>
//       <p>Longitude: {coordinates.lon}</p>
//     </div>
//   );
// };

// export default WebSocketComponent;
import { useEffect, useState } from "react";

const WebSocketComponent = () => {
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => console.log("Connected to WebSocket server");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received Coordinates:", data);
      setCoordinates(data);
    };

    socket.onerror = (error) => console.error("WebSocket Error:", error);

    socket.onclose = () => console.log("Disconnected from WebSocket");

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h2>Real-time Coordinates</h2>
      <p>Latitude: {coordinates.lat}</p>
      <p>Longitude: {coordinates.lon}</p>
    </div>
  );
};

export default WebSocketComponent;
