import React from 'react';

const Account = ({ username, email, onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className='content__right'>
      <div className='account'>
        <div className='account__inner'>
          <img className='account__avatar' src="./images/Avatar.png" alt="User Avatar" />
          <h3 className='account__username'>{username}</h3>
          <p className='account__email'>{email}</p>
          <div className='account__buttons'>
            <button className="button__profile">My Profile</button>
            <button className="button_logout" onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      </div>
      <div className='contactus'>
        <div className='contactus__inner'>
          <h2 className='contactus__title'>CONTACT US</h2>
          <p className='contactus__text'>@anellatte</p>
          <p className='contactus__text'>@turashbayeva_jr</p>
          <p className='contactus__text'>@fvrbloom</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
