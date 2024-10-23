const PORT = process.env.PORT ?? 8000;
const express = require("express");

const cors = require("cors");
const app = express();
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {console.log(`Server running on PORT ${PORT}`)} );

// Get all Records
app.get("/userrecords", async (req, res) => {
  try {
    const records = await pool.query("SELECT * FROM users");
    res.json(records.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a single Record by UserID
app.put("/userrecords/setinbuilding/:user_id", async (req, res) => {
  const {user_id} = req.params
  const { in_building } = req.body;
  try {
    const editUser = await pool.query(
      "UPDATE users SET in_building = $1 WHERE user_id = $2;",
      [in_building, user_id]
    );
    res.json(editUser);
  } catch (err) {
    console.error(err.message);
  }
});
