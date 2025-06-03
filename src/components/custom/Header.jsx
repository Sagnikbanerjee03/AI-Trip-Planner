import React from 'react';

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      <img src="/logo.svg" alt="logo" />
      <div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Header;
