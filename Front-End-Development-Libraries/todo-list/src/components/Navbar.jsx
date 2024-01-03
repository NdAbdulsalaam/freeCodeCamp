import { useState, useEffect, useRef } from "react";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef();

    const handleClick = () => {
        return setDropdown((prev) => !prev)
    }

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(!dropdown);
            }
        };
        document.addEventListener("mousedown", handler);
    }, [dropdown])

    return (
        <nav>
            <ul>
                <li>Home</li> 
                <li>About</li>
                <li ref={ref}>
                    <button onClick={handleClick}>
                        Services <span>&#8595;</span>
                    </button>
                    {dropdown && (
                        <ul>
                            <li>Design</li>
                            <li>Development</li>
                        </ul>
                    )}
                </li>
           </ul>
        </nav>
    )
}

export default Navbar;