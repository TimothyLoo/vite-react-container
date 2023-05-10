import express from "express";

const router = express.Router();

// POST /posts
router.get('/api/add', (req, res) => {
  console.log('added!');
});

// POST /posts
router.post("/add", (req, res) => {
  console.log('added!');
});

export default router;
