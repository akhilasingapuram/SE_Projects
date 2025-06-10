import ProjectCard from "../components/ProjectCard";

const projectData = [
  { title: "Portfolio Website", description: "Personal portfolio built with React + TypeScript + Vite + TailwindCSS." },
  { title: "E-commerce App", description: "Full-stack shopping platform with payments integration." },
  { title: "Blog Platform", description: "Markdown-powered blog with CMS support." },
];

function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      {projectData.map((project, index) => (
        <ProjectCard key={index} title={project.title} description={project.description} />
      ))}
    </div>
  );
}

export default Projects;
