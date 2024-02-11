import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: String,
  intro: String,
  links: [
    {
      name: String,
      href: String,
    },
  ],
  highlights: [
    {
      label: String,
      desc: String,
    },
  ],
  industry: String,
  imageUrl: String,
  bgSize: String,
});

const ProjectModel = mongoose.model("Project", ProjectSchema);

export default ProjectModel;


