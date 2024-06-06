import React from 'react';

const NavLinks = () => {
  const links = ['About Us', 'Contacts', 'Courses'];
  return (
    <nav className="flex space-x-8 text-green-300">
      {links.map((link, index) => (
        <a key={index} href="#">{link}</a>
      ))}
    </nav>
  );
};
const LoginButton = () => {
  return (
    <button className="text-blue-600 bg-white hover:bg-yellow-300 px-5 py-2 rounded-full transition-colors duration-300">Login</button>
  );
};

const Header = () => {
  return (
    <header className="bg-red-300 p-4 flex justify-between items-left">
      <div className="text-white text-xl font-bold">Kalvium</div>
      <NavLinks />
      <LoginButton />
    </header>
  );
};

export default Header;
