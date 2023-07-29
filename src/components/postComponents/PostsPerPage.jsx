import React, { useContext } from "react";
import { UniversalContext } from "../context/UniversalContext";

const PostsPerPage = () => {
  const { setPostsPerPage, postsPerPage, totalPost } =
    useContext(UniversalContext);

  let stl = {
    size: "w-fit h-fit mx-auto fixed bottom-[35px] left-0 right-0  flex justify-center items-center",
    box: "w-[55px] h-[55px] text-[14px]  flex flex-col rounded-full items-center justify-center px-3  leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
  };

  return (
    <div className={stl.size}>
      {postsPerPage === 20 ||
      postsPerPage === 50 ||
      postsPerPage === totalPost ? (
        <div className={stl.box} onClick={() => setPostsPerPage(10)}>
          <p>Show</p>
          <p>10</p>
        </div>
      ) : (
        ""
      )}
      <div className={stl.box} onClick={() => setPostsPerPage(20)}>
        <p>Show</p>
        <p>20</p>
      </div>
      <div className={stl.box} onClick={() => setPostsPerPage(50)}>
        <p>Show</p>
        <p>50</p>
      </div>
      <div className={stl.box} onClick={() => setPostsPerPage(totalPost)}>
        <p>Show</p>
        <p>All</p>
      </div>
    </div>
  );
};

export default PostsPerPage;
