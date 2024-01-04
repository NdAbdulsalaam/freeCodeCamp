import { useState } from "react";

const ContactApp = () => {
    const [fname, setfname] = useState('')
    const handleChange = (e) =>{
        setfname(e.target.value);
    };

    return (
        <>
            <h1>Contact Form</h1>
            <form>
                <label>First name:
                    <input type="text" value={fname} onChange={handleChange} />
                </label>
            </form>
            <h3>First name: {fname}</h3>
        </>

    );
};

export default ContactApp;