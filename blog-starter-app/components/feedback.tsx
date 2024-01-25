{/*I want to add a feedback form adding a text area and a send button. When the button is cliked the form is send to my email. */

/*create components/feedback.tsx*/
/*create a text area, where a text can be written*/
/*create a submit button*/
/*create the logic to collect data, submit the form and send the data as an email  */
/*style the form*/}

// FeedbackForm.js
import React, { useState, FormEvent } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Write data to the 'feedback' node in Firebase Realtime Database
     // Import the Firebase Realtime Database module

    // ...

    await firebase.database().ref('feedback').push({
        name,
        message,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
      });

      console.log('Feedback submitted successfully');
      // Optionally, you can reset the form fields after submission
      setName('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
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


