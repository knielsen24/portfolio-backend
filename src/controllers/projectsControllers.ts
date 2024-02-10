import express, { Request, Response } from "express";
import Project from "../models/Project";

export async function getProjectsContoller(req: Request, res: Response) {
  const projects = await Project.find();
  res.json(projects);
}

export async function createProjectController(req: Request, res: Response) {
  const newProject = new Project({
    title: "portfolio",
  });
  const createdProject = await newProject.save();
  res.json(createdProject);
}

export async function deleteProjectController(req: Request, res: Response) {
  const projectId = req.params.projectId;
  const project = await Project.findByIdAndDelete(projectId);
  res.json(project);
}
