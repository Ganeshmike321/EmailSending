const nodemailer = require('nodemailer')


const CLIENT_ID ="955715175512-e1cv132i5cph34nsogeebr5vsna58ojs.apps.googleusercontent.com"
const CLIENT_SECRET ="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"


async function sendMail(){
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type : "OAuth2",
        user: "ganeshkumarbaskaran18@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        accessToken :"ya29.a0AfB_byBKEwc-VMbxn8-gyzhSV3ly_ZAZLaDiIK3uMPzo26Jngr0GaisN_wJtnrYoy4DunH-b11LqpLNcOfrfDY1e-6Qe6mEgInd5qddSXQQ3m77cdtZ7ErtQh4j38pvgiHT6QFnVsbgHjZG5sJ7umHcWjfGnOC2ZP2_iaCgYKAdgSARMSFQHGX2MiRqB-g4hUsRzdXofXXv0gzg0171"
      }
    })

    const mailOptions ={
      from : "ganeshkumarbaskaran18@gmail.com",
      to : 'ganeshkumarbass@gmail.com',
      subject: "Auto reply",
      text: "Hi there, I'm out of my vacation, Currently out of station Let me get back to you once I reach home. Thank You!",
     
    }
    const result = transport.sendMail(mailOptions)

    return result
  } catch (error) {
    console.log(error);
  }
}

sendMail().then((result)=>{
  console.log("Email send successfully", result)
}).catch((err)=>{
  console.log("Error", err.message)
})