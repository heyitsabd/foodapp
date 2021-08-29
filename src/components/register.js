import React,{useState} from 'react';
import PhoneInput from 'react-phone-number-input';

// function Register(){
//     const[popup,openPopup] = useState(false)
//     const Registration=()=>{
//         openPopup(!popup)
//     }
//     const [val, setVal] = useState();
    return(
        <div>
             <PhoneInput
                    className="popup_form_number"
                    placeholder="Enter phone number"
                    onChange={setValue} />
                    <input type="name" placeholder="ENTER YOUR NAME"></input>
                    <input type="email" placeholder="ENTER YOUR EMAIL ID"></input>
        </div>
    )
}
export default Register