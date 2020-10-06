const express = require("express")
const helmet = require("helmet")

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
res.status(200).json({welcome: "to the jungle"})
})

const PORT = process.env.PORT || 3242;
server.listen(PORT, () => console.log(`API running on port ${PORT}`))