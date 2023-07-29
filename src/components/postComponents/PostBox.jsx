import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiSolidCommentDetail } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";

const PostBox = ({
  children,
  name,
  userName,
  title,
  postBody,
  showComment,
  setShowComment,
  setShowEdit,
  showEdit,
  setShowAlert,
  setPostID,
  post,
}) => {
  const [favorite, setFavorite] = useState(false);
  const [added, setAdded] = useState(false);

  //Functionalities of icons
  let handleComment = () => {
    showComment ? setShowComment(false) : setShowComment(true);
  };
  let handleAlert = (id) => {
    setShowAlert(true);
    setPostID(id);
  };
  let handleEditForm = (id) => {
    setShowEdit(true);
    setPostID(id);
  };
  let handleFavorite = () => {
    favorite ? setFavorite(false) : setFavorite(true);
    favorite ? setAdded(false) : setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2500);
  };
  // style
  const stl = {
    size: "break-words w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto h-fit flex flex-col justify-between relative",
    top: "flex justify-end px-4 py-3 h-[45px]",
    body: "flex flex-col  p-4 h-[230px]",
    userDetail:
      "text-gray-900 font-[600] mb-3 leading-[19px] h-[35px] capitalize",
    postDetail: "h-fit",
    title: "font-medium text-gray-900 first-letter:capitalize h-[53px] ",
    text: "text-sm text-gray-700 first-letter:capitalize h-fit overflow-hidden   ",
    bottom: "flex justify-evenly px-4 py-3 text-[20px]",
    comment: `${
      showComment && "bg-primary text-white"
    } w-[35px] h-[35px] rounded grid place-items-center`,
    delete: ` w-[35px] h-[35px] rounded grid place-items-center hover:text-red-600`,
    favorite: `${favorite && "text-red-400"}  relative`,
    added: `${
      added && "absolute z-[20] left-[-65px] top-[24px] text-[12px] w-[150px]"
    }`,

    edit: `${
      showEdit && "bg-primary text-white"
    } w-[35px] h-[35px] rounded grid place-items-center`,
  };
  return (
    <div className={stl.size}>
      <div className={stl.top}>
        <div className="overflow-hidden w-[22px] h-[22px] rounded-full border-[1px] border-gray-500">
          <input type="checkbox" className="w-[105%] h-[105%] border-none" />
        </div>
      </div>
      <hr />
      <div className={stl.body}>
        <div className={stl.userDetail}>
          <p>{name}</p>
          <p className="text-gray-500">{userName}</p>
        </div>
        <div className={stl.postDetail}>
          <p className={stl.title}>{title}</p>
          <p className={stl.text}>{postBody}</p>
        </div>
      </div>
      <hr />
      <div className={stl.bottom}>
        <button className={stl.comment} onClick={() => handleComment()}>
          <BiSolidCommentDetail />
        </button>
        <button className={stl.delete} onClick={() => handleAlert(post.id)}>
          <AiFillDelete />
        </button>
        <button className={stl.edit} onClick={() => handleEditForm(post.id)}>
          <RiEditBoxFill />
        </button>
        <button className={stl.favorite} onClick={handleFavorite}>
          <MdFavorite />
          {added && <p className={stl.added}>Added to favorite</p>}
        </button>
      </div>
      {children}
    </div>
  );
};

export default PostBox;
