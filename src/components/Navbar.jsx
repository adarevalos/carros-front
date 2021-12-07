import React from 'react';
import TriggerDarkMode from './TriggerDarkMode';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from 'media/logo.png';

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <nav className='bg-red-400'>
      <ul className='flex w-full justify-between my-3'>
        <li><img className='mx-auto h-11 w-15' src={Logo} alt='Workflow' /></li>
        <li>Admin</li>
        <li>vehiculos</li>
        <li>
          <TriggerDarkMode />
        </li>
        <li className='px-3'>
          <button
            onClick={() => loginWithRedirect()}
            className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'
          >
            Iniciar Sesión
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
