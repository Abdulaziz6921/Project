import { BsArrowRightCircleFill, BsPostcard } from "react-icons/bs";
import { MdPhotoCamera } from "react-icons/md";
import { RiTodoFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const RightSlider = ({ setOpen, open }) => {
  let stl = {
    right_slider: `${
      open ? "translate-x-[600px]" : "translate-x-[0px]"
    } w-[50%] h-full bg-dark_like fixed right-0 top-0 z-[4] rounded-l-[25px] duration-700 md:hidden shadow-[0_19px_80px_20px_rgba(0,0,0,0.7)]`,

    arrow_icon:
      "mt-[10px] mb-[20px] ml-[5%] text-[25px] bg-transparent rounded-[50%]",

    li_collection: "w-full h-[15%] flex flex-col justify-between mt-[20px]",

    l_items: "w-[95%] h-[45px] flex items-center justify-center  ",

    inner_li: "w-[135px] h-full flex justify-start items-center",

    l_items_icons: " text-[15px] mr-[10px] ",
  };
  return (
    <div className={stl.right_slider}>
      <BsArrowRightCircleFill
        onClick={() => setOpen(true)}
        className={stl.arrow_icon}
      />

      <ul className={stl.li_collection}>
        <NavLink to={"/"}>
          <li className={stl.l_items}>
            <div className={stl.inner_li}>
              <BsPostcard className={stl.l_items_icons} />
              Posts
            </div>
          </li>
        </NavLink>
        <NavLink to={"/photos"}>
          <li className={stl.l_items}>
            <div className={stl.inner_li}>
              <MdPhotoCamera className={stl.l_items_icons} />
              Photos
            </div>
          </li>
        </NavLink>

        <NavLink to={"/todos"}>
          <li className={stl.l_items}>
            <div className={stl.inner_li}>
              <RiTodoFill className={stl.l_items_icons} />
              Todos
            </div>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default RightSlider;
