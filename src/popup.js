import { useState } from 'react';
import React from 'react';

const Popup = (p) => {
  
  return (
    
    <div className="popups" >
      <div >
      {p.content}
      </div>
        <span className="close" onClick={p.handleClose}>
          x
        </span>
       <div className="popup_close_area_a" onClick={p.handleClose}>
         
       </div>

       <div className="popup_close_area_b" onClick={p.handleClose}>
         
         </div>
    </div>
  );
};

export default Popup;   