import React from 'react';

const Account = () => {
  return (
    <div className='content__right'>
      <div className='account'>
        <div className='account__inner'>
          <img className='account__avatar' src="./images/Avatar.png" alt="User Avatar" />

          <h3 className='account__username'>Jung Jungkook</h3>

          <p className='account__email'>love_anel@gmail.com</p>

          <div className='account__buttons'>
            <a className="button__profile">My Profile</a>
            <a className="button button_logout">Log Out</a>
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
