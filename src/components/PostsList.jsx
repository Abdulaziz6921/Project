import { useContext, useEffect } from "react";
import { PostCard } from "./postComponents/PostCard";
import Loader from "./Loader";
import { UniversalContext } from "./context/UniversalContext";

function PostsList() {
  const { posts, isPending, currentPage, postsPerPage, setTotalPost } =
    useContext(UniversalContext);

  //   Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    let totalPosts = posts && posts.length;
    setTotalPost(totalPosts);
  }, [posts]);

  return (
    <>
      {isPending && <Loader />}
      {posts &&
        posts.slice(indexOfFirstPost, indexOfLastPost).map((post) => {
          return <PostCard post={post} key={post.id} userId={post.userId} />;
        })}
    </>
  );
}

export default PostsList;
