import { useLocation } from "react-router-dom";
import PostsList from "./PostsList";
import PhotosList from "./PhotosList";
import TodosList from "./TodosList";
import Pagination from "./postComponents/Pagination";
import { useContext } from "react";
import PostsPerPage from "./postComponents/PostsPerPage";
import { UniversalContext } from "./context/UniversalContext";

function Main() {
  const location = useLocation();
  let currentPath = location.pathname;

  const { setCurrentPage, postsPerPage, totalPost } =
    useContext(UniversalContext);

  //   Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // style
  const stl = {
    main: "p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-[100%] w-full bg-dark_like",
    mainForTodo: "p-4 grid gap-5 grid-cols-1 h-fit w-full bg-dark_like",
  };

  return (
    <main className={currentPath === "/todos" ? stl.mainForTodo : stl.main}>
      {currentPath === "/" ? (
        <>
          <PostsList />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={totalPost}
            paginate={paginate}
          />
          <PostsPerPage />
        </>
      ) : currentPath === "/photos" ? (
        <PhotosList />
      ) : (
        <TodosList />
      )}
    </main>
  );
}

export default Main;
