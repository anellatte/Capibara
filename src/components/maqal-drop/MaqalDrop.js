import React from 'react';

const MaqalDrop = () => {
  return (
    <div className='maqal content__body'>
      <div className='container'>
        <div className='maqal__inner'>
          <h1 className='maqal__title title'>MAQAL DROP</h1>

          <div className='maqal__game'>
            <div
              className='maqal__box'

            >

            </div>

            <div className='maqal__words'>

            </div>

            <div className='maqal__buttons'>
              <button className='button button_check'>
                Check
              </button>

              <button className='button button_restart'>
                Restart
              </button>

              <button
                className='button button_level'

              >
                Next Level
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaqalDrop;
