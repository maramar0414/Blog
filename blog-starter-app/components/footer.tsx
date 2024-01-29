import Container from "./container";
import SocialMedia from "./social-media";

import { EXAMPLE_PATH } from "../lib/constants";
//import FeedbackForm from "./feedback";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-3 lg:mb-0 lg:pr-4 lg:w-1/2">
            Maria Araque
          </h3>
            <p className="text-2xl lg:text-[1.5rem] tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Full-stack Developer
            </p>
          <SocialMedia/>
          
         {/*<FeedbackForm/>*/}
          
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

{/*I want to add a feedback form adding a text area and a send button. When the button is cliked the form is send to my email. */

/*create components/feedback.tsx*/
/*create a text area, where a text can be written*/
/*create a submit button*/
/*create the logic to collect data, submit the form and send the data as an email  */
/*style the form*/}

{/*Feedback form logic // Collect-Send-receive

Collect 
    - Get values from text area - state
        -error message if there isn't a message
    -clean text area
    -Submit
Send - error message? 
    -fetch data

Receive
    -access the route


-add email to a .env

*/}

// FeedbackForm.js
/*import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../firebase';

//Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your logic to store feedback in Firebase
    const db = firebase.firestore();
    await db.collection('feedback').add({
      feedback,
      timestamp: new Date(),
    });

    setFeedback('');
  };

 /* return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Provide your feedback..."
      />
      <button type="submit">Submit Feedback</button>
    </form>
  );*/
//};

//export default FeedbackForm;