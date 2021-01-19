function App() {
  return (
    <div className="App">
      <nav id="nav">
        <div className="name">Saul Vega</div>
        <div className="links">
          <ul>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">projects</a>
            <a href="#footer">Contact</a>
          </ul>
        </div>
      </nav>
      {/* <div className="return">
        <a href="#about">Return To top</a>
      </div> */}
      <section id="about">This is the about section</section>
      <section id="skills">This is the skills section</section>
      <section id="projects">This is the projects section</section>
      <footer id="footer"> this is the footer </footer>
    </div>
  );
}

export default App;
