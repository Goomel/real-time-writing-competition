import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const PORT = 4000;

const players = {};

io.on('connection', (socket) => {
  socket.on('join_game', ({ name }) => {
    console.log(`Player joining: ${name}`);
    players[socket.id] = {
      id: socket.id,
      name: name || "Anonim",
      wpm: 0,
      accuracy: 100,
      progressText: ""
    };

    io.emit('game_state', {
      players: Object.values(players),
      currentSentence: "Lorem ipsum dolor sit amet."
    });
  });

  socket.on('disconnect', () => {
    console.log(`Disconnected: ${socket.id}`);
    delete players[socket.id];
    io.emit('game_state', { players: Object.values(players) });
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});