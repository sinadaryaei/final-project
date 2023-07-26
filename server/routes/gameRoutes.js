import express from 'express';
import ClientError from '../lib/client-error.js';

// Your actual function to get game status from database
// Replace this with your actual implementation
async function getGameStatusFromDatabase(gameId) {
  // Your code here
  return null; // placeholder
}

const router = express.Router();

router.get('/api/game/:id', async (req, res, next) => {
  try {
    const gameId = req.params.id;
    const game = await getGameStatusFromDatabase(gameId);

    if (!game) {
      // If the game doesn't exist, throw a 404 error
      throw new ClientError(404, 'Game not found');
    }

    // If everything's fine, send the game data
    res.json(game);
  } catch (err) {
    // If there's a database error, pass it to the next middleware
    next(err);
  }
});

export default router;
