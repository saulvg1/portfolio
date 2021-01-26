import ProjectsCarousel from '../components/ProjectsCarousel.js';
export default function projects() {
  return (
    <section id="projects">
      <div className="projectInfo">
        <h1>Recent Projects</h1>
        <div className="underline"></div>
      </div>
      <div className="projectsContainer">
        <ProjectsCarousel />
      </div>
    </section>
  );
}
