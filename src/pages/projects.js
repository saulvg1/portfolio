import ProjectsCarousel from '../components/ProjectsCarousel.js';
export default function projects() {
  return (
    <section id="projects">
      <h1>Recent Projects</h1>
      <div className="projectsContainer">
        <ProjectsCarousel />
      </div>
    </section>
  );
}
