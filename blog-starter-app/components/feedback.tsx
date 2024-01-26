{/*I want to add a feedback form adding a text area and a send button. When the button is cliked the form is send to my email. */

/*create components/feedback.tsx*/
/*create a text area, where a text can be written*/
/*create a submit button*/
/*create the logic to collect data, submit the form and send the data as an email  */
/*style the form*/}

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


