// Import
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';

function Navbar({ name, id }) {
  return (
    <Link to="">
      <li className="header--nav__item" key={id}>
        {name}
      </li>
    </Link>
  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Navbar;
