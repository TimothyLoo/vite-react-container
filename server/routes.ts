import express from "express";
import connection from '../database/dbConnect.js';

const router = express.Router();

// POST /posts
router.get('/api/add', (req, res) => {
  console.log('added!');
});

// POST /posts
router.post('/api/add', (req, res: express.Response) => {
  console.log(req.body)
  connection.promise().query(`INSERT INTO surfspots (name) VALUES (?)`, [req.body.name])
  .then(result=>res.send(result))
  .catch(error=>res.send(error));
});

export default router;
