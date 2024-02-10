import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const ProjectSchema = new Schema({
//   project: ObjectId,
  title: String,
  // intro: String,
  // links: [
  //   {
  //     name: String,
  //     href: String,
  //   },
  // ],
  // highlights: [
  //   {
  //     label: String,
  //     desc: String,
  //   },
  // ],
  // industry: String,
  // imageUrl: String,
  // bgSize: String,
});

const ProjectModel = mongoose.model("Project", ProjectSchema);

export default ProjectModel;

// id: string;
//   title: string;
//   intro: string;
//   links: Links[];
//   highlights: Labels[];
//   industry: string;
//   features?: Labels[];
//   technologies?: Labels[];
//   description?: string;
//   // challenges?: string[];
//   imageUrl: string | StaticImageData;
//   bgSize: string;
//   bgColor?: string;
//   date?: string;
//   datetime?: string;
