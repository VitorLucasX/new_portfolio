import { MdArrowDownward } from "react-icons/md"
import { SlMouse } from "react-icons/sl"

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
            <SlMouse className="wheel" style={{ fontSize: '30px', color: '#000'}} />
            <span className="home__scroll-name home__scroll-arrow">Scroll Down</span>
            <MdArrowDownward style={{ color: '#000'}}/>
        </a>
    </div>
  )
}

export default ScrollDown
