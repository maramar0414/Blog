{/*I want to add a feedback form adding a text area and a send button. When the button is cliked the form is send to my email. */

/*create components/feedback.tsx*/
/*create a text area, where a text can be written*/
/*create a submit button*/
/*create the logic to collect data, submit the form and send the data as an email  */
/*style the form*/}

import {useRef} from "react"



const Feedback = () => {
    const messageRef = useRef<HTMLTextAreaElement>(null);

    async function submitForm(e: React.FormEvent){
    e.preventDefault();
    let message = messageRef.current?.value;

    if (!message) {
        alert("Please, fill up the form");
        return;
    }
    if(messageRef.current){
        messageRef.current.value = "";
    }
    
}
    return (
    <>
    <form 
    action="/" onSubmit={submitForm}>
    <div >
    <h1>Send me your thoughts </h1>
    <textarea className="border-black border-3" placeholder="Message..." rows={10} ref={messageRef} >
       </textarea>
       <button type="submit" className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"> 
       Send Feedback
       </button>
       </div>
       </form> 
      </>
    )
}
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

export default Feedback
