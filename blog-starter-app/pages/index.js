import {useRef} from "react"
export default function Form(){
    const messageRef = useRef("");

    async function submitForm(e){
    e.preventDefault();
    let message = messageRef.current.value;

    if (!message) {
        alert("Please, fill up the form");
        return;
    }
    messageRef.current.value = "";
}}