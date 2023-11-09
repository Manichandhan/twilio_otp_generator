const twilio = require("twilio");
const otp=require('otp-generator')
require('dotenv').config()

const send = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);


const numbers=['+919490907657','+918309704701','+918985124052','+917207205116']
numbers.forEach((val)=>{
    const s=otp.generate(6,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false})
    send.messages
    .create({
      body: `this is a custom message. otp-${s}`,
      from: "+14249032263",
      to: val,
    })
    .then((mes) => console.log(mes))
    .catch((err) => console.log(err));
})

