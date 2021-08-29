import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import './App.css';
import Login from './components/loginComponent';
import design1 from './images/design1.svg'
import biryani from './images/biryani.jpg'
import logo from './images/logo.png'
import design from './images/picture.png'
import { APP_CONSTANTS, SAFETY_RULES, } from "./constants/index";
import Popup from './popup.js';
import Pop from './components/pop';
import Slide from './components/crousel'
import Peachbg from './components/peachbg';
import Blackbg from './components/blackbg';
import Whitebg from './components/whitebg';
import google from './images/google.svg'
import Login2 from './components/login2';
// import PhoneInput from 'react-phone-number-input';

function App() {
  const [isOpen, setIsOpen] = useState()
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const [value, setValue] = useState();
  const warning = (props) => {
    if (value.length == 13) {
      alert("OTP SENT")
    }
    else {
      alert("INVALID NUMBER")
      props.preventDefault()
    }
  }
  const [isLoginVisible, updateLoginVisibility] = useState(true);
  const Registration = () => {
    updateLoginVisibility(!isLoginVisible)
  }

  return (
    <div className="body" style={{
      backgroundImage: `url(${biryani})`,
    }}>
      <div className="black">
        <button onClick={togglePopup} className="yellow_button">
          {APP_CONSTANTS.login}
        </button>
      </div>

      <div >
        {isOpen && <Popup
          content={
            <div>
              {isLoginVisible ? (
                <div>
                  <div className="popup_whitebg">
                    <div className="popup_text1">
                      {APP_CONSTANTS.popupText}
                      <form>
                        <PhoneInput
                          className="popup_form_number"
                          placeholder="Enter phone number"
                          onChange={setValue} />
                        <button className="button_popup" onClick={warning}> {APP_CONSTANTS.sendOtp}</button>
                      </form>
                      <p className="new_user">{APP_CONSTANTS.newUser} <a onClick={Registration} className="link"><u> REGISTER </u></a></p>
                      <div className="style_hr">
                        <hr className="hr_popup_left" />{APP_CONSTANTS.Or}<hr className="hr_popup_right" />
                      </div>
                      <div>
                        <button className="fb_button">
                          <a href="https://www.facebook.com/" className="deco">
                            <div className="fb_logo">
                              <i className='fab fa-facebook-f' style={{ color: 'royalblue', fontSize: '20px' }}></i>
                            </div>
                            <div className="fb_text_bg">
                              {APP_CONSTANTS.Fb}
                            </div>
                          </a>
                        </button>
                        <button className="ggl_button">
                          <a className="deco" href="https://accounts.google.com/AddSession/identifier?hl=en-GB&continue=https%3A%2F%2Fmail.google.com%2Fmail&service=mail&ec=GAlAFw&flowName=GlifWebSignIn&flowEntry=AddSession">
                            <img src={google} className="ggl_icon"></img>
                            <div className="ggl_text_bg">
                              {APP_CONSTANTS.Ggl}
                            </div>
                          </a>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              ) : (
                <div className="popup_whitebg">
                  <PhoneInput
                    className="popup_form_number"
                    placeholder="Enter phone number"
                    onChange={setValue} />
                  <input type="name" className="enter_name" placeholder="ENTER YOUR NAME*"></input>
                  <input type="email" className="enter_email" placeholder="ENTER YOUR EMAIL ID*"></input><br /><br />
                  <p className="smth">Alredy registered?</p><a onClick={Registration} className="smth" ><u>LOGIN</u></a>
                </div>
              )}
            </div>}
          handleClose={togglePopup}
        />}
      </div>

      <div>
        <img className="logo" src={logo}>
        </img>
        <form className="search_engine" action="/action_page.php" >
          <input type="text" placeholder="Type your location here..."></input>
          <button value="ORDER FOOD">{APP_CONSTANTS.placeHolder}</button>
        </form>
        <div className="out1">
          <img src={design} className="design"></img>
          <div className="The_Royal_Menu">
            <p>{APP_CONSTANTS.TheRoyalMenu}</p>
          </div>
          <img src={design1} className="design2"></img>
        </div>
        <Slide></Slide>
      </div>
      <img src={design} className="design3"></img>
      <p className="experience_the_royalty"> {APP_CONSTANTS.expRoyality} </p>
      <img src={design1} className="design4"></img>
      <p className="para1"><b>{APP_CONSTANTS.expRoyality1}<br /><br />{APP_CONSTANTS.expRoyality2}<br /><br />{APP_CONSTANTS.expRoyality3}</b><br />
      </p>

      <Whitebg></Whitebg>
      <Peachbg></Peachbg>
      <Blackbg></Blackbg>
    </div>
  );
}
export default App;
