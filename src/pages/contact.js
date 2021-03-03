import {
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MessageModal from '../components/MessageModal.js';

export default function contact() {
  return (
    <div id="contact">
      <div className="social">
        <h1>Lets get in touch</h1>
        <div className="underline"></div>
        <div className="links">
          <MessageModal />
          <a
            href="https://www.linkedin.com/in/saul-vega-759a6591/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/saulvg1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <div className="emailButton">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <a
            href="https://www.instagram.com/s.vegs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
          <a
            href="https://twitter.com/svegaofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </div>
      </div>
    </div>
  );
}
