import React from "react";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Header = ({ handleModuleWindow }) => {
  const [open, setOpen] = React.useState(false);

  const handleHeaderBtn = () => {
    setOpen((prev) => !prev);
  };

  const handleWraperHeader = () => {
    setOpen(false);
  };

  return (
    <>
      <header className={"header"}>
        <div className={"container__header"}>
          <div className={"container__inner"}>
            <h2 className={"header__logo"}>
              <Link to={"/"}>SPAW-DESIGN</Link>
            </h2>
            <nav
              className={
                open ? "menu-open header__main-nav" : "header__main-nav"
              }
            >
              <button className={"header__btn"} onClick={handleHeaderBtn}>
                <span className={"hum-menu"}>
                  {open ? <RxCross1 /> : <AiOutlineMenu />}
                </span>
              </button>
              <ul className={"header__links"}>
                <li className={"header__link"}>
                  <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleWraperHeader}
                  >
                    Projekty
                  </Link>
                </li>
                <li className="header__link">
                  <Link
                    to={"/"}
                    onClick={handleWraperHeader && handleModuleWindow}
                  >
                    Kontakty
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
