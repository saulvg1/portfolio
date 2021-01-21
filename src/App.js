import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <div className="App">
      <div className="scrollButton">
        <a href="#about">
          <FontAwesomeIcon icon={faChevronCircleUp} />
        </a>
      </div>
      <nav id="nav">
        <div className="name">Saul Vega</div>
        <div className="links">
          <ul>
            <a href="#about">About</a>
            <a href="#projects">projects</a>
            <a href="#contact">Contact</a>
          </ul>
        </div>
      </nav>
      {/* <div className="return">
        <a href="#about">Return To top</a>
      </div> */}
      <section id="about">This is the about section</section>
      <section id="projects">This is the projects section</section>
      <section id="contact"> this is the </section>
      <footer className="footer">This is the footer</footer>
    </div>
  );
}

export default App;
