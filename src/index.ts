import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import Project from "./models/Project";

const app = express();

app.use(cors())
app.use(express.json())

const PORT = 8000;

let dbURI = process.env.MONGO_URL;

app.post("/projects", async (req: Request, res: Response) => {
  const newProject = new Project({
    title: "triple stamp",
  });

  const createdProject = await newProject.save();

  res.json(createdProject);
});

mongoose.connect(dbURI!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
