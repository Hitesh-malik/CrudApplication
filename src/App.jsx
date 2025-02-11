import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from './pages/Details';
import Home from './pages/Home';
import { Client } from '@stomp/stompjs'; // Correct import for Stomp Client
import { useEffect } from 'react';
import WebSocketComponent from './pages/WebSocketComponent';

function App() {
  // Fake WebSocket URL
  var url = "ws://fake-websocket-url.com/ws";

  // useEffect(() => {
  //   // Create STOMP client
  //   const client = new Client({
  //     brokerURL: url,
  //     connectHeaders: {
  //       login: 'guest', // Replace with actual login
  //       passcode: 'guest', // Replace with actual passcode
  //       host: 'fake-host' // Some STOMP brokers may require this
  //     },
  //     debug: (msg) => console.log("[STOMP Debug]:", msg),
  //     reconnectDelay: 5000, // Auto-reconnect after 5 seconds if disconnected
  //     heartbeatIncoming: 4000, // Expecting server heartbeats every 4 seconds
  //     heartbeatOutgoing: 4000, // Sending heartbeats every 4 seconds
  //     onConnect: () => {
  //       console.log("Connected to WebSocket");
        
  //       // Example: Subscribe to a topic (replace with actual destination)
  //       client.subscribe('/topic/messages', (message) => {
  //         console.log("Received:", message.body);
  //       });
  //     },
  //     onStompError: (frame) => {
  //       console.error("[STOMP Broker Error]:", frame.headers.message);
  //     }
  //   });

  //   // Connect to the WebSocket server
  //   client.activate();

  //   // Cleanup function to disconnect on unmount
  //   return () => {
  //     client.deactivate().then(() => console.log("Disconnected from WebSocket"));
  //   };
  // }, []);

  // return (
  //   <>
  //     <Navbar />
  //     <Routes>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/details/:id' element={<Details />} />
  //     </Routes>
  //     <ToastContainer />
  //   </>
  // );
  return (
    <>
    <WebSocketComponent/>
    </>
  )
}

export default App;
