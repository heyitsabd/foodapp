import biryani1 from '../images/biryani1.jpg';
import changezi from '../images/changezi.jpg';
import dosa from '../images/dosa.jpg';
import mutton from '../images/mutton.png';
import palak from '../images/palak.jpg';
import paneer from '../images/paneer.jpg';
import samosa from '../images/samosa.jpg';
import thal from '../images/thal.jpg';
import afghani from '../images/afghani.jpg';
import safety1 from '../images/safetyMeasure1.png';
import safety2 from '../images/safetyMeasure2.png';
import safety3 from '../images/safetyMeasures3.png';

export const breakpoints = [
    { width: 100, itemsToShow: 1 },
    { width: 550 , itemsToShow: 2 },
    { width: 1000, itemsToShow: 4 }
];

export const APP_NAME = "BIRYANI HOUSE";

export const APP_CONSTANTS = {
    login: "LOGIN",
    placeHolder: "PLACE ORDER", 
    expRoyality1:"Embellished with flavours so fascinating, that everything else comes to a standstill.",
    expRoyality2:"Its artfully balanced exotic spices, golden-hued basmati along with a potpourri of elegant ingredients will lift your day in the most majestic way.",
    expRoyality3:"After all, some days deserve only Behrouz.",
    para2:"The Biryani that's safe, hygienic & royal!",
    para3:"We know how personal biryani is to you & we are doing our best to keep it safe & hygienic.",
    popupText:" Login via registered number",
    sendOtp:"SEND OTP",
    newUser:"New User?",
    Register:"REGISTER",
    Or:"OR",
    Fb:"Login with Facebook",
    Ggl:" Login with Google",
    TheRoyalMenu:"The Royal Menu",
    expRoyality:"Experience the Royalty",
    SafetyMeasuresHeading:"Everyone in the Royal Kitchen has been instructed to wear masks at all times",
    weDeliverTo:"We deliver to",
}

export const MENU_ITEMS = [
    {
        itemName: "Biryani",
        imageSource: biryani1
    },
    {
        itemName: "Changazi",
        imageSource: changezi
    },
    {
        itemName: "Mutton",
        imageSource: mutton,
    },
    {
        itemName: "Dosa",
        imageSource: dosa,
    },
    {
        itemName: "Palak",
        imageSource: palak
    },
    {
        itemName: "Paneer",
        imageSource: paneer
    },
    {
        itemName: "Samosa",
        imageSource: samosa
    },
    {
        itemName: "Thal",
        imageSource: thal
    },
    {
        itemName: "Afghani",
        imageSource: afghani
    },

]
export const SAFETY_RULES=[
    {
        describe: "Real-time Temperature Tracking of Kitchen and Delivery Staff",
        imageSource: safety1,
    },
    {
        describe: "Option to Choose Contactless Delivery",
        imageSource: safety2,
    },
    {
        describe: "Real-time Temperature Tracking of Kitchen and Delivery Staff",
        imageSource: safety3,
    }

]
export const eatSure=[
    {
       describe:"200+ Stringent Quality Checks",
    },
    {
        describe: " No Artificial Colours or Flavours",
    },
    {
        describe:" Double Sealed Packaging",
    },
    {
        describe:"Medically Certified Staff",
      
    }
]
export const safetyRule=[
    {
        describe:" A daily body-temperature log is maintained for all the staff members.",
        icon: "fas fa-cubes",
    },
    {
        describe:" The frequency of hand-washing has increased to once every 1 hour.",
        icon: "fas fa-cubes"
    },
    {
        describe:" The frequency of kitchen surface sanitization has gone up to once every 4 hours.",
        icon: "fas fa-cubes"
    },
    {
        describe:" Food is cooked at a high temperature, using exceptional produce from certified traders.",
        icon: "fas fa-cubes",
    }, 
    {
        describe:" Food is delivered in an enclosed, sealed package to avoid contamination.",
        icon: null
    }  
]
export const locatTions=[
    {
        location: "Delhi"
    },
    {
        location: "Mumbai"
    },
    {
        location: "Chennai"
    },
    {
        location: "Kota"
    },
    {
        location: "Rohtak"
    },
    {
        location: "Kanpur"
    },

]
