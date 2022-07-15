import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid, authToken);
const twilioPhoneNumber = process.env.TWILIO_MY_TWILIO_PHONE_NUMBER;

function sendMessage(message, phoneNumber) {
  return twilioClient.messages.create({
    body: message,
    from: twilioPhoneNumber,
    to: phoneNumber
  });
}

export { sendMessage };
