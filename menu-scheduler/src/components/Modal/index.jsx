import React from "react";
import AllergyForm from "../Form";
import "./styles.css";

const Modal = ({ setIsOpen }) => {
    const handleBackgroundClick = (e) => {
        if (e.target.className === 'darkBG') {
            setIsOpen(false);
        }
    }

  return (
      <div className='darkBG' onClick={handleBackgroundClick}>
          <div className='centered' onClick={(e) => e.stopPropagation()}>
              <div className='modal'>
                <div className='modalContent'>
                  <AllergyForm setIsOpen={setIsOpen}/>
                  <div className='modalActions'>
                  <button className='closeBtn' type='button' onClick={() => setIsOpen(false)}>Close</button>
                  </div>
              </div>
              </div>
          </div>
      </div>
  );
}

export default Modal;