import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollButton() {
  return (
    <div className="scrollButton">
      <a href="#top">
        <FontAwesomeIcon icon={faChevronCircleUp} />
      </a>
    </div>
  );
}
