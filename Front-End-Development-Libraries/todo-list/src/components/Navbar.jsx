import { useState, useEffect, useRef } from "react";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef();

    const handleClick = () => {
        return setDropdown((prev) => !prev)
    }

    const handleOutsideClick = (ref, currentState, updater) => {
        useEffect(() => {
            const handler = (event) => {
                if (dropdown && ref.current && !ref.current.contains(event.target)) {
                    setDropdown(false);
                    // updater();
                }
            };
            document.addEventListener("mousedown", handler);
            return () => {
                document.removeEventListener("mousedown", handler);
            }

        }, [ref, currentState, updater])
    }

    handleOutsideClick(ref, dropdown);

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