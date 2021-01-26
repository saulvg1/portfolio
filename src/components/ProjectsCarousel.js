import Carousel from 'react-elastic-carousel';
import ProjectsItem from './ProjectsItem.js';
import projectsData from '../data/projectsData.js';
export default function ProjectsCarousel() {
  return (
    <Carousel className="carouselContainer">
      {projectsData.map((project, index) => {
        return (
          <ProjectsItem
            key={index}
            name={project.name}
            image={project.image}
            url={project.url}
            gitUrl={project.gitUrl}
            tech={project.tech}
            description={project.description}
          />
        );
      })}
    </Carousel>
  );
}
