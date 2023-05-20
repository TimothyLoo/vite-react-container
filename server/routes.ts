import express from "express";
import connection from '../database/dbConnect.js';

const router = express.Router();

// GET
router.get('/api/get', (req, res) => {
  connection.promise().query(`SELECT * FROM surfspots`)
  .then(([rows, fields])=>res.send(rows))
  .catch(error=>res.send(error));
});

// POST
router.post('/api/add', (req, res: express.Response) => {
  connection.promise().query(`INSERT INTO surfspots (name) VALUES (?)`, [req.body.name])
  .then(result=>res.send(result))
  .catch(error=>res.send(error));
});

// DELETE
router.delete('/api/delete/:id', (req, res: express.Response) => {
  connection.promise().query(`DELETE FROM surfspots WHERE id=${req.params.id}`)
  .then(result=>res.send(result))
  .catch(error=>res.send(error));
});

export default router;
