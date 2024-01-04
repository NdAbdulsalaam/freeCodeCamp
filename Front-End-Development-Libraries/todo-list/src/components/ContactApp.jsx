import { useState } from "react";
import Navbar from "./Navbar";

const ContactApp = () => {
    const [state, setState] = useState({
        fname: '',
        lname: '',
        message: '',
        carBrand: '',
        isChecked: false,
        sex: '',
    });

    const carBrands = ["Toyota", "Lexux", "BMW", "Honda"]

    const carBrandOptions = carBrands.map((brand, key) => (
            <option value={brand} key={key}>{brand}</option>
    ));

    const handleChange = (e) =>{
        const value = e.target.type ==='checkbox'? e.target.checked : e.target.value;
        setState((state) => ({
            ...state,
            [e.target.name]: value
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
                <label>
                    <input type="radio" name="sex" value={state.sex} checked={state.sex === "male"} onChange={handleChange} />
                    {''} Male
                </label>
                <label>
                    <input type="radio" name="sex" value={state.sex} checked={state.sex === "female"} onChange={handleChange} />
                    {''} Female
                </label>
            </form>
            <h3>Name: {state.fname} {state.lname}</h3>
            <h4>Message: {state.message}</h4>
            <h4>Favourite car brand: {state.carBrand}</h4>

            <h4>Is it checked?: {state.isChecked? 'Yes': 'No'}</h4>
            <h3>Sex / Gender: {state.sex}</h3>
        </>

    );
};

export default ContactApp;