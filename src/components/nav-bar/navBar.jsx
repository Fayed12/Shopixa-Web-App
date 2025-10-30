// react icon
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

// react router
import { NavLink } from "react-router";

// local
import style from "./navBar.module.css";

function NavBar() {
  return (
    <>
      <div className={style.navbar}>
        <div className="container flex justify-between items-center">
          <div className={style.logo}>
            <span>Shopixa</span>
          </div>
          <div className={style.links}>
            <ul className="flex justify-center items-center">
              <li>
                <NavLink to={"/home"} replace={true}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} replace={true}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} replace={true}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to={"signUp"} replace={true}>
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className={style.search}>
              <input
                type="text"
                name="search"
                placeholder="what are you looking for?"
              />
              <CiSearch />
            </div>
            <span className={style.icon}>
              <CiHeart />
            </span>
            <span className={style.icon}>
              <MdOutlineShoppingCart />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
