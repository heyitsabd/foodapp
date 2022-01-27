import React from 'react';
import Carousel, { consts } from "react-elastic-carousel"
import { MENU_ITEMS } from '../constants';
import { breakpoints } from '../constants';


function Slide(){
    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? '<' : '>'
        return (
          <button className="arrow_styling" onClick={onClick} disabled={isEdge}>
            <b>{pointer}</b>
          </button>
        )
      }
          
return(
<div className="out">
          <Carousel breakPoints={breakpoints} className="card" itemsToScroll={1} pagination={false} renderArrow={myArrow} >
            {/* menut items are in constants */}
            {MENU_ITEMS.map((item, index) => {
              return (
                <div >
                  <img className="image" src={item.imageSource}></img>
                  <div>
                    <p className="label">{item.itemName}</p>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
);
}     
export default Slide;
