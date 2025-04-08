import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Image src={image} alt={title} width={400} height={300} />
    </div>
  );
};

export default ProjectCard;
