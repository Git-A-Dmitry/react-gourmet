import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className='header'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contacts'>Contacts</NavLink>
          </li>
        </ul>
      </header>

      <Outlet />
      {/* <footer className='footer'>
        2022 Copyright &copy; - <span>All Rights Reserved</span>
      </footer> */}
    </>
  );
}

export { Layout };
