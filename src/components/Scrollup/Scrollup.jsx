import { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import './scrollup.css';

const Scrollup = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY >= 560) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", checkScroll);
        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);

    return (
        <a href="#" className={`scrollup ${show ? 'show-scroll' : ''}`}>
            <FaArrowUp className="scrollup__icon" />
        </a>
    );
}

export default Scrollup;
