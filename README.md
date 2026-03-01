# Real-time Writing Competition

A multiplayer typing competition where players race to type sentences as fast as possible. Built with Next.js on the frontend and an Express + Socket.IO\*server on the backend.

## Features

- Join a game with a nickname
- Shared, server-synchronized countdown timer (60 seconds per round)
- Live sentence display with per-character colour feedback (green = correct, red = incorrect)
- Real-time leaderboard showing all connected players

## Tech Stack

| Layer         | Technology                                          |
| ------------- | --------------------------------------------------- |
| Frontend      | Next.js 16 (App Router), TypeScript, Tailwind CSS   |
| Backend       | Node.js, Express, Socket.IO                         |
| Communication | WebSockets (`socket.io`)                            |
| Dev tooling   | `concurrently` (runs both servers with one command) |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install root dependencies (concurrently)
npm install

# Install backend dependencies
cd backend && npm install && cd ..

# Install frontend dependencies
cd frontend && npm install && cd ..
```

### Running locally

```bash
npm run dev
```

This starts both servers concurrently:

- **Frontend** → http://localhost:3000
- **Backend** → http://localhost:4000

## TODO / Potential improvements

- WPM & Accuracy calculation
- Sorting leaderboard by score
- Database integration
- Responsive Web Design
- Local storage / session persistence
- Round management improvements
- Ranking & scoring system
