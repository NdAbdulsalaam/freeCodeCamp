import { useState } from "react";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
    console.log(useState(false));

    return (
        <>
            nav bar content
        </>
    )
}

export default Navbar;