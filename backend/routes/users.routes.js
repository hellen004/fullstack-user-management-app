const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const pool = require("../db");

router.get("/", auth, async (req, res) => {
  const users = await pool.query("SELECT id, username, email FROM users");
  res.json(users.rows);
});

router.delete("/:id", auth, async (req, res) => {
  await pool.query("DELETE FROM users WHERE id=$1", [req.params.id]);
  res.json("User deleted");
});

module.exports = router;
