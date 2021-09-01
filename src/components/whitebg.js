import React from 'react';
import ReactPlayer from 'react-player';
import { APP_CONSTANTS,SAFETY_RULES  } from '../constants';
function Whitebg() {
    return (
        <div>
            <div>
                <p className="para2">{APP_CONSTANTS.para2}</p><p className="para3">{APP_CONSTANTS.para3}</p>
            </div>

            <div>
                {SAFETY_RULES.map((item, indx) => {
                    return (
                        <div className="para">
                            <img src={item.imageSource} className="safety" ></img>
                            <p>{item.describe}</p>
                        </div>
                    )
                })}
            </div>

            <div className="vedio">
                <ReactPlayer url='https://www.youtube.com/watch?v=b5oX1OckIGc&t=4s' width='600px' height='300px' ></ReactPlayer>
            </div>
        </div>
    );
}
export default Whitebg