interface ProjectCardProps {
    title: string;
    description: string;
  }
  
  function ProjectCard({ title, description }: ProjectCardProps) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  }
  
  export default ProjectCard;
  