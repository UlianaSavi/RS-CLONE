import { sendSignInLinkToEmail } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const actionCodeSettings = {
  url: 'genial-motif-376109.firebaseapp.com',
  handleCodeInApp: true,
};

export const sentCode = async (email: string) => {
  console.log('here');
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      console.log('The link was successfully sent!');
      window.localStorage.setItem('emailForSignIn', email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
