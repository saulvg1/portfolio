function App() {
  return (
    <div className="App">
      <nav id="nav">
        <div className="name">Saul Vega</div>
        <div className="links">
          <ul>
            <a href="#about">About</a>
            <a href="#about">Skills</a>
            <a href="#about">projects</a>
            <a href="#footer">Contact</a>
          </ul>
        </div>
      </nav>
      {/* <div className="return">
        <a href="#about">Return To top</a>
      </div> */}
      <section id="about"></section>
      <section id="skills"></section>
      <section id="projects"></section>
      <footer id="footer"></footer>
    </div>
  );
}

export default App;
