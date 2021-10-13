import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import './App.css';
import design1 from './images/design1.svg'
import biryani from './images/biryani.jpg'
import logo from './images/logo.png'
import design from './images/picture.png'
import { APP_CONSTANTS, SAFETY_RULES, } from "./constants/index";
import Popup from './popup.js';
import Slide from './components/crousel';
import Peachbg from './components/peachbg';
import Blackbg from './components/blackbg';
import Whitebg from './components/whitebg';
import google from './images/google.svg'


function App() {
  const [isOpen, setIsOpen] = useState()
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


  const [value, setValue] = useState("");
  const warning = (props) => {            
    if (value.length === 13) {
      alert("OTP SENT")
    }

    else {
      alert("INVALID NUMBER")
      props.preventDefault()
    }
  }

  const [email, setEmail] = useState('');
  const[userName,setUserName]= useState("")
  const[error,setError]=useState('')
  const[error2,setError2]=useState('')

  const buttonPress=(btn)=>{
    if(error==""){
      alert("Registered")
    }
    else if(error=="Write Your Name"){
      btn.preventDefault();
    }
    else if(error=="Invalid Input retype your name"){
      btn.preventDefault();
      }
      else if(error2 == ""){
        alert("Registered")
    }
    else if(error2 == "Write Your Email Id"){
        btn.preventDefault();
    }
    else if(error2 == "Invalid Input Retype your Email"){
        btn.preventDefault()
    }
    
  }
  const emailWarning = (em) =>{
    setEmail(em.target.value)
    var regEx = /^[A-Za-z_.\]{3,}[1-9]{1,}@[a-z.\]{3,30}[.]{1}[a-z]{1,}[.]{1}[a-zA-z.]{1,5}$/;
    if(regEx.test(em.target.value)){
      setError2("")
    }
    else if(em.target.value.length == 0){
        setError2("Write Your Email Id")
        em.preventDefault();
    }
    else {
      setError2("Invalid Input Retype your Email")
      em.preventDefault();
    }
  }


  const userNameWarning = (event) => {
    
    var RegEx2 = /^[A-Za-z. ]{1,15}$/;
    setUserName(event.target.value)
    // if (regEx.test(email)) {
      
    //     if (value.length === 13) {
          // if(RegEx2.test(userName)){
            if(RegEx2.test(event.target.value)){
            setError("")
        } 
      //   if(RegEx2.test(userName)){
      //     setUserName("REGISTERED")
      // } 
          else if(event.target.value.length == 0){
              setError("Write Your Name")
              event.preventDefault();
          }
        else {
          setError("Invalid Input retype your name")
          // alert("check username input");
          event.preventDefault()
        }
    //       }
          
    //       else {
    //         // alert("Number must be of 10 digits")
    //         event.preventDefault()
    //       }
    // }

    // else {
    //   alert("Email is Invalid")
    //   event.preventDefault()
    // }

  }
  console.log(email)
  console.log(userName)
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

      <div>
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
                  {/* <PhoneInput
                    className="popup_form_number"
                    placeholder="Enter phone number"
                    name="phnumber"
                    onChange={setValue} />  */}
                  <form> 
                    <input type="name" className="enter_name" 
                    placeholder="ENTER YOUR NAME*" onChange={(e)=> userNameWarning(e)}></input>
                     {/* <input type="name" className="enter_name" 
                    placeholder="ENTER YOUR NAME*" onChange={(e)=> setUserName(e.target.value)}></input> */}
                   <div className="errmsg4" ><b>{error}</b></div> 
                   
                    <input type="email" className="enter_email" placeholder="ENTER YOUR EMAIL ID*" 
                    onChange={(em) => emailWarning(em)}>

                    </input>
                   
                    <br /><br />
                    <div className="errmsg4"><b>{error2}</b></div>
                    {/* <button
                      className="continue"
                      onClick={(event) => {
                        buttonPress(event)
                      }}
                    > */}
                     <button
                      className="continue"
                      onClick={(event) => {
                        buttonPress(event)
                      }}
                    >
                      Continue
                    </button>
                  </form>
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
