import React from "react";
import AllergyForm from "../Form";
import "./styles.css";

const Modal = ({ setIsOpen }) => {
    // This function will close the modal when the background is clicked
    const handleBackgroundClick = (e) => {
        if (e.target.className === 'darkBG') {
            setIsOpen(false);
        }
    }

  return (
        // This div is the dark background that will cover the entire page when the modal is open
      <div className='darkBG' onClick={handleBackgroundClick}>
            {/* This makes sure that the background click only applies to the background */}
          <div className='centered' onClick={(e) => e.stopPropagation()}>
                {/* This div is the modal itself */}
              <div className='modal'>
                <div className='modalContent'>
                  <AllergyForm setIsOpen={setIsOpen}/>
              </div>
              </div>
          </div>
      </div>
  );
}

export default Modal;