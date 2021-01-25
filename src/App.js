//component imports
import Nav from './components/Nav.js';
import About from './pages/about.js';
import Projects from './pages/projects.js';
import Contact from './pages/contact.js';
import Footer from './components/footer.js';
import ScrollButton from './components/ScrollButton.js';

function App() {
  return (
    <div className="App" id="top">
      <Nav />
      <ScrollButton />
      <About />
      <Projects />
      {/* <Contact /> */}
      {/* <Footer />  */}
    </div>
  );
}

export default App;
