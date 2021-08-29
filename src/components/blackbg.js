import React from 'react';
import { locatTions,APP_CONSTANTS } from '../constants';


function Blackbg(){
    return(
<div className="black_background">
        <div className="we_deliver_to">
          {APP_CONSTANTS.weDeliverTo}
        </div>
        <div className="locations">
          {locatTions.map((item, index) => {
            return (
              <div>{item.location}</div>
            )
          })}
        </div>
      </div>
    )
}
export default Blackbg;