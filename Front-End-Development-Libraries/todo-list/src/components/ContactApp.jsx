import { useState } from "react";

const ContactApp = () => {
    const [fname, setfname] = useState('')

    return (
        <>
            <h1>Contact Form</h1>
            <form>
                <label>Firstname:
                    <input type="text" value={fname} />
                </label>
            </form>
            <h3>First name: {fname}</h3>
        </>

    );
};

export default ContactApp;