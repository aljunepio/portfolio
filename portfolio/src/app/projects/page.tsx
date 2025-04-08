import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for Project 1",
    image: "/project1.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for Project 2",
    image: "/project2.jpg",
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>My Projects. THis is just a sample projects</h1>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
      <Footer/>
    </div>
  );
};

export default Projects;
