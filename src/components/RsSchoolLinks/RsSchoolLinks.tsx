import { GithubIcon } from '../../assets/icons/icons';
import './RsSchoolLinks.scss';

function RsSchoolLinks() {
  return (
    <div className="links">
      <a href="https://github.com/UlianaSavi/RS-CLONE/blob/main/README.md" target="_blank" rel="noreferrer">
        <GithubIcon />
      </a>
      <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
        <img className="links__rsschool" src="https://rs.school/images/rs_school_js.svg" alt="Rs school" />
      </a>
    </div>
  );
}

export default RsSchoolLinks;
