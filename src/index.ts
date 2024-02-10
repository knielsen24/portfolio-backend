import { config } from "dotenv";
config();
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import {
  createProjectController,
  deleteProjectController,
  getProjectsContoller,
} from "./controllers/projectsControllers";

const app = express();
let dbURI = process.env.MONGO_URL;
const PORT = 8000;

// Middleware config
app.use(cors({ origin: "*" }));
app.use(express.json());

// CRUD: Routes, and controller functions
app.get("/projects", getProjectsContoller);
app.post("/projects", createProjectController);
app.delete("/projects/:projectId", deleteProjectController);

mongoose.connect(dbURI!).then(() => {
  console.log(`Orange mocha frappacinos... listening on port ${PORT}`);
  app.listen(PORT);
});
