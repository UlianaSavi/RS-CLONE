import { GithubIcon, RsschoolIcon } from '../../assets/icons/icons';
import './RsSchoolLinks.scss';

function RsSchoolLinks() {
  return (
    <div className="links">
      <a href="https://github.com/UlianaSavi/RS-CLONE/blob/main/README.md" target="_blank" rel="noreferrer">
        <GithubIcon />
      </a>
      <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
        <RsschoolIcon />
      </a>
    </div>
  );
}

export default RsSchoolLinks;
