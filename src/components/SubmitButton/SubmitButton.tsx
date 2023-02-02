import { Link } from 'react-router-dom';

export function SubmitButton() {
  return (
    <Link className="btn" to="/phoneCodeEnter">
      Submit
    </Link>
  );
}
