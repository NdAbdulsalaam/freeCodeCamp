import { useState } from "react";
import Navbar from "./Navbar";

const ContactApp = () => {
    const [state, setState] = useState({
        fname: '',
        lname: ''
    });
    const handleChange = (e) =>{
        setState((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
            <Navbar />

            <h1>Contact Form</h1>
            <form>
                <label>First name: {''}
                    <input name="fname" type="text" value={state.fname} onChange={handleChange} />
                </label>
                <label>Last name name: {''}
                    <input name="lname" type="text" value={state.lname} onChange={handleChange} />
                </label>
            </form>
            Name: {state.fname} {state.lname}
            {/* <h3>First name: {state.fname}</h3> */}
            {/* <h3>Last name: {state.lname}</h3> */}
        </>

    );
};

export default ContactApp;