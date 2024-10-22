const PORT = process.env.PORT ?? 8000;
const express = require("express");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {console.log(`Server running on PORT ${PORT}`)} );

app.get("/saysomething", (req, res) => {
    console.log('Hello World');
    // Send a response back to the client
    res.json({ message: "Hello from the server!" });
  });


