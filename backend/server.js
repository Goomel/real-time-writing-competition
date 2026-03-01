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

const roundDuration = 60; // seconds
const players = {};
const typingSentences = [
  "The quick brown fox jumps over the lazy dog.",
  "I forgot my password again and had to reset it twice.",
  "Bright stars shimmered across the silent night sky.",
  "She bought fresh coffee beans from the local market.",
  "My keyboard makes a strange sound when I type fast.",
  "A sudden storm interrupted our picnic in the park.",
  "He solved the puzzle faster than anyone expected.",
  "The old library smells like dusty books and history.",
  "Please send me the updated report before noon.",
  "We watched the sunrise from the top of the hill.",
  "Her cat always sleeps on the warm laptop.",
  "They built a small cabin near the quiet lake.",
  "I need to charge my phone before it dies.",
  "The colorful balloons floated above the crowd.",
  "He accidentally spilled water on his notebook.",
  "Music helps me concentrate while working late.",
  "The train arrived exactly at seven thirty.",
  "She practiced typing every day to improve her speed.",
  "A mysterious message appeared on the screen.",
  "Winter mornings are cold but beautifully peaceful."
];
let currentSentenceIndex = 0;
let timeLeft = roundDuration;

setInterval(() => {
  timeLeft--;

  if (timeLeft <= 0) {
    // Start a new round
    timeLeft = roundDuration;
    currentSentenceIndex = currentSentenceIndex + 1;
  }

  io.emit('game_state', {
    players: Object.values(players),
    currentSentence: typingSentences[currentSentenceIndex],
    timeLeft
  });
}, 1000);

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
      currentSentence: typingSentences[currentSentenceIndex],
      timeLeft
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