import {
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function footer() {
  return (
    <footer id="footer">
      <div className="social">
        <h1>Lets get in touch</h1>
        <div className="underline"></div>
        <div className="links">
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </div>
      </div>
      <div className="email">saul.vg1@gmail.com</div>
      <div className="footerBanner">
        <span> &#169; Saul Vega 2021 | All Rights Reserved</span>
      </div>
    </footer>
  );
}
