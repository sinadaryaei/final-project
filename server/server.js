// import express from 'express';
// import errorMiddleware from './lib/error-middleware.js';
// import pg from 'pg';
// import gameRoutes from './routes/gameRoutes.js';
// import WebSocket from 'ws';
// import http from 'http';

// const db = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
// const app = express();

// const wss = new WebSocket.Server({ server });
// console.log('WebSocket server listening on port 8000');

// const games = [];

// // Function to check if the game is over
// const checkIfGameOver = (board) => {
//   // Check if there is a winner in the rows.
//   for (let i = 0; i < 3; i++) {
//     if (board[i] === board[i + 3] && board[i] === board[i + 6] && board[i]) {
//       return true;
//     }
//   }

//   // Check if there is a winner in the columns.
//   for (let i = 0; i < 3; i++) {
//     if (board[i * 3] === board[i * 3 + 1] && board[i * 3] === board[i * 3 + 2] && board[i * 3]) {
//       return true;
//     }
//   }

//   // Check if there is a winner in the diagonals.
//   if (board[0] === board[4] && board[0] === board[8] && board[0]) {
//     return true;
//   } else if (board[2] === board[4] && board[2] === board[6] && board[2]) {
//     return true;
//   }

//   // Check for a draw
//   if (!board.includes(null)) {
//     return true;
//   }

//   // There is no winner or draw yet
//   return false;
// };

// wss.on('connection', (ws) => {
//   let game = games.find(g => g.players.length === 1);
//   if (!game) {
//     game = { players: [], board: Array(9).fill(null) };
//     games.push(game);
//   }
//   game.players.push(ws);

//   ws.on('message', (message) => {
//     try {
//       const move = parseInt(message);
//       const playerNumber = game.players.indexOf(ws);
//       game.board[move] = playerNumber;
//     } catch (error) {
//       console.error(error);
//     }

//     const isGameOver = checkIfGameOver(game.board);

//     if (isGameOver) {
//       const returnMessage = JSON.stringify({ isGameOver: true });
//       game.players.forEach(client => {
//         client.send(returnMessage);
//       });
//     }
//   });
// });

// app.on('upgrade', (request, socket, head) => {
//   wss.handleUpgrade(request, socket, head, (ws) => {
//     wss.emit('connection', ws, request);
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

// const server = http.createServer(app);
// server.listen(process.env.PORT, () => {
//   process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
// });
