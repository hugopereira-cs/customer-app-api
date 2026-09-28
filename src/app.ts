import cors from "cors";
import express from "express";
import router from "./routes";

function createApp() {
  const app = express();

  app.use(cors());

  // Create a middleware to parse JSON request bodies
  app.use(express.json());

  // Use the router for handling routes
  app.use("/api", router);

  return app;
};

export default createApp;
