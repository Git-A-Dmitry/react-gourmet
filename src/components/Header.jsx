import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='teal darken-3'>
      <div className='nav-wrapper'>
        <span className='brand-logo' style={{ fontSize: '1.5rem' }}>
          Gourmet
        </span>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
