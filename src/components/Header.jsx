import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='orange'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo' style={{ fontSize: '1.5rem' }}>
          Gourmet
        </Link>
        {/* <span className='brand-logo' style={{ fontSize: '1.5rem' }}>
          Gourmet
        </span> */}
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
