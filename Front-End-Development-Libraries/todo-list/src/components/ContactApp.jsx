import { useState } from "react";
import Navbar from "./Navbar";

const ContactApp = () => {
    const [state, setState] = useState({
        fname: '',
        lname: '',
        message: '',
        carBrand: '',
        isChecked: false,
    });

    const carBrands = ["Toyota", "Lexux", "BMW", "Honda"]

    const carBrandOptions = carBrands.map((brand, key) => (
            <option value={brand} key={key}>{brand}</option>
    ));

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
                <label>
                    Your message: 
                    <textarea name="message" placeholder="Enter your message" value={state.message} onChange={handleChange} />
                </label>
                <label>
                    Car brand:
                    <select name="carBrand" value={state.carBrand} onChange={handleChange}>
                        <option value={''} disabled>Pick a car brand</option>
                        {carBrandOptions}
                    </select>
                </label>
                <label>
                    <input type="checkbox" name="isChecked" value={state.isChecked} onChange={handleChange} />
                    Is checked?
                </label>
            </form>
            <h3>Name: {state.fname} {state.lname}</h3>
            <h4>Message: {state.message}</h4>
            <h4>Favourite car brand: {state.carBrand}</h4>

            <h4>Is it checked?: {state.isChecked? 'Yes': 'No'}</h4>
            {/* <h3>Last name: {state.lname}</h3> */}
        </>

    );
};

export default ContactApp;