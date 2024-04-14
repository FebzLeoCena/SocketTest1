import { fileURLToPath } from "url";
import { dirname, join } from "path";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicPath = join(__dirname, "../public");

const app = express();

// Serve files from the public directory
app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log("server listening on 3000");
});

console.log(publicPath);
console.log(__dirname + "/../public");
