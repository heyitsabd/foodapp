import React from 'react';
import { eatSure,APP_CONSTANTS,safetyRule } from '../constants';
import eatsure from '../images/eatsure.png'
import design5 from '../images/design5.svg'
function Peachbg(){
return(
<div className="peach_background">
    <div className="bluebox">
        <div className="eatsure">
            <div>
                <img className="eatsure_pic" src={eatsure} ></img>
                <hr className="hr1"></hr>
            </div>

            {eatSure.map((item, index) => {
                return (
                    <div>
                        <p className="eatsure_icon"><i className="fa fa-check-square"  ></i></p>
                        <p className="eatsure_text">{item.describe}</p>
                        <hr className="hr2"></hr>
                    </div>
                )
            })}
            <div>
                <a href="https://www.eatsure.com/?utm_source=behrouz_website">
                    <input type="button" style={{ color: "#4945be" }} className="button" value="KNOW MORE" ></input>
                </a>
            </div>
        </div>
    </div>
    <br /> <br />
    <div>
        <p className="SafetyMeasureHeading">
            {APP_CONSTANTS.SafetyMeasuresHeading}<br />
            <img src={design5}>
            </img>
        </p>
    </div>
    <div className="SafetyMeasures">
        {safetyRule.map((item, index) => {
            return (
                <div>
                    <p>{item.describe}</p>
                    <div className="cubes">
                        <i className={item.icon}></i>
                    </div>
                </div>
            )
        })}
    </div>
</div>
);
}
export default Peachbg;