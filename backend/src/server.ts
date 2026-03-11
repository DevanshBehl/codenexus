import express from "express";
import { ENV } from "./lib/env";
import path from "path";

const app = express();

app.get("/book", (req, res) => {
  res.status(200).json({
    message: "server running successfully"
  });
});

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {

  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  // React fallback
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });

}

app.listen(ENV.port, () => {
  console.log(`Server running on port ${ENV.port}`);
});