import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const ProjectsItem = ({ name, image, url, gitUrl, description, tech }) => {
  return (
    <div className="projectItem">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <div className="projectInfoContainer">
        <p>{description}</p>
        <h4>
          <span>{tech}</span>
        </h4>
        <div className="links">
          <div className="link">
            <a href={gitUrl}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <span>GitHub</span>
          </div>
          <div className="link">
            <a href={url}>
              <FontAwesomeIcon icon={faCode} />
            </a>
            <span>Live</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
