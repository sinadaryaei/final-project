// import express from 'express';
// import errorMiddleware from './lib/error-middleware.js';
// import pg from 'pg';
// import gameRoutes from './routes/gameRoutes.js';
// import http from 'http';
// import cors from 'cors';
// import { Server } from 'socket.io';

// const db = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// const app = express();

// const server = http.createServer(app);
// const io = new Server(server); // Create a new Socket.IO server

// console.log('WebSocket server listening on port 8000');

// const games = [];

// // Function to check if the game is over
// const checkIfGameOver = (board) => {
//   // ... (rest of the function)

//   io.on('connection', (socket) => {
//     let game = games.find((g) => g.players.length === 1);
//     if (!game) {
//       game = { players: [], board: Array(9).fill(null) };
//       games.push(game);
//     }
//     game.players.push(socket);

//     socket.on('message', (message) => {
//       try {
//         const move = parseInt(message);
//         const playerNumber = game.players.indexOf(socket);
//         game.board[move] = playerNumber;
//       } catch (error) {
//         console.error(error);
//       }

//       const isGameOver = checkIfGameOver(game.board);

//       if (isGameOver) {
//         const returnMessage = JSON.stringify({ isGameOver: true });
//         game.players.forEach((client) => {
//           client.send(returnMessage);
//         });
//       }
//     });
//   });
// });

// app.on('upgrade', (request, socket, head) => {
//   io.handleUpgrade(request, socket, head, (socket) => {
//     io.emit('connection', socket, request);
//   });
// });

// const reactStaticDir = new URL('../client/build', import.meta.url).pathname;
// const uploadsStaticDir = new URL('public', import.meta.url).pathname;

// app.use(cors());
// app.use(express.static(reactStaticDir));
// app.use(express.static(uploadsStaticDir));
// app.use(express.json());

// app.use('/api/game', gameRoutes);

// app.get('/api/hello', (req, res) => {
//   res.json({ message: 'Hello, World!' });
// });

// app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

// server.listen(process.env.PORT, () => {
//   process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
// });
