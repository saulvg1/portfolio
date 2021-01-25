import Carousel from 'react-elastic-carousel';
import PortfolioItem from './PortfolioItem.js';
import projectsData from '../data/projectsData.js';
export default function ProjectsCarousel() {
  return (
    <Carousel className="carouselContainer">
      {projectsData.map((project, index) => {
        return (
          <div>
            <PortfolioItem
              className="portfolioItem"
              key={index}
              name={project.name}
              image={project.image}
              url={project.url}
              tech={project.tech}
              description={project.description}
            />
          </div>
        );
      })}
    </Carousel>
  );
}
