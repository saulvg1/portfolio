import selfPhoto from '../images/self.jpeg';
import Skills from '../components/Skills';
export default function about() {
  return (
    <section id="about">
      <div className="aboutMe">
        <div className="aboutInfo">
          <h1>My name is Saul</h1>
          <p>
            Some of my earliest memories are that of me building Zoids toy
            robots as a kid. I had so much fun building and figuring out how
            they worked. Since then I have developed skills through my work and
            school but I always wanted to find something I was very passionate
            about.
          </p>
          <p>
            I found web engineering on accident going through the rabbit hole
            that is Youtube and I'm so glad I did! Coding has revived my love of
            building things. I enjoy building products that solve problems and
            people enjoy using. Front-end web engineering is my game and I look
            forward to speaking more to you about what we can build together!
          </p>
        </div>
        <div className="aboutImage">
          <img src={selfPhoto} alt="saul"></img>
        </div>
      </div>
      <Skills />
    </section>
  );
}
