import React from 'react';
import ReactPlayer from 'react-player';
import { APP_CONSTANTS,SAFETY_RULES  } from '../constants';
function Whitebg() {
    return (
        <div className='whitebg'>
            <div>
                <p className="para2">{APP_CONSTANTS.para2}</p><p className="para3">{APP_CONSTANTS.para3}</p>
            </div>
            <div>
                {SAFETY_RULES.map((item, inde) => {
                    return (
                        <div className="para">
                            <img src={item.imageSource} className="safety" ></img>
                            <p >{item.describe}</p>
                        </div>
                    )
                })}
            </div>

            {/* <div className="vedio">
                <ReactPlayer url='https://www.youtube.com/watch?v=b5oX1OckIGc&t=4s' width='600px' height='300px' ></ReactPlayer>
            </div> */}
            <iframe className='vedio' src='https://www.youtube.com/embed/b5oX1OckIGc?ecver=1&cc_load_policy=1&iv_load_policy=1&rel=0&showinfo=0&yt:stretch=16:9&autohide=1&color=red&width=560&width=560'>

            </iframe>
        </div>
    );
}
export default Whitebg