import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm(props) {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    function submitHandler(event) {
        event.preventDefault()
    }
}