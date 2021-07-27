const keys = require("./keys");

// Express App Setup
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Postgres Client Setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

// Express Route Handlers
app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/values", async (req, res) => {
  const values = await pgClient.query("select * from values;");
  res.send(values.rows);
});

app.post("/createvalues", async (req, res) => {
  try {
    const importance = req.body.importance;
    const value = req.body.value;
    const currentScore = req.body.current_score;
    const targetScore = req.body.target_score;
    const description = req.body.description;
    const habit = req.body.habit;

    await pgClient.query(
      "insert into values( importance, value, current_score, target_score, description, habit)  values($1 ,$2, $3, $4, $5, $6);",
      [importance, value, currentScore, targetScore, description, habit]
    );
    res.send(204);
  } catch (e) {
    res.send(e);
  }
});

app.listen(5000, (err) => {
  console.log("Listening");
});
