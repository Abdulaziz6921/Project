import { useEffect, useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import RightSlider from "./RightSlider";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  const stl = {
    size: `bg-dark_like w-full h-[60px] mx-auto text-white md:h-[80px] sticky top-0 right-0 left-0 z-20  duration-700 ${
      scrolled ? "shadow-[0_0_120px_5px_rgba(0,0,0,0.7)]" : "shadow-[0px]"
    }`,

    inner_size:
      "w-[95%] lg:w-[90%] h-full mx-auto flex justify-end md:justify-center items-center",

    main_links:
      "hidden md:flex justify-evenly items-center md:w-[50%] md:h-[55px] lg:w-[45%]",

    li: "w-[130px] h-full",

    li_a: `w-full h-full flex justify-center items-center font-[600] text-[20px] duration-400`,

    three_bar: "w-[50px] flex justify-center items-center h-full md:hidden",

    bar: "text-[42px]",

    shadow: `${
      open ? "hidden" : "block"
    } w-full h-[100vh] bg-transparent relative top-0 z-[2] md:hidden`,
  };

  return (
    <div className={stl.size}>
      <div className={stl.inner_size}>
        <ul className={stl.main_links}>
          <li className={stl.li}>
            <NavLink to={"/"} className={stl.li_a}>
              Posts
            </NavLink>
          </li>
          <li className={stl.li}>
            <NavLink to={"/photos"} className={stl.li_a}>
              Photos
            </NavLink>
          </li>
          <li className={stl.li}>
            <NavLink to={"/todos"} className={stl.li_a}>
              Todos
            </NavLink>
          </li>
        </ul>
        <div className={stl.three_bar}>
          <VscThreeBars className={stl.bar} onClick={() => setOpen(!open)} />
        </div>
      </div>
      <div onClick={() => setOpen(true)} className={stl.shadow}></div>
      <RightSlider setOpen={setOpen} open={open} />
    </div>
  );
}

export default Navbar;
